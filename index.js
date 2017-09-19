
"use strict";

const path = require("path");
const fs = require("fs-extra");
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
const replaceExt = require("replace-ext");

// Regex's
let regexLink = /{\.link\s+([^|]*)(?:\s+\|\s+(.*))?\s*}/g;
let regexInclude = /{\.include\s+(.*)\s*}/g;
let regexHeading = /{\.#([^}]*)\s*([^}]*)\s*}/g;

// Preprocessor to expand all file includes and resolve relative links
let preprocess = (function () {

  let filestack = [];

  function preprocess(entry) {
    filestack.push(entry);

    let dir = path.dirname(entry);
    let text = fs.readFileSync(entry, "utf8");

    text = text.replace(regexLink, function (match, filepath, name) {
      return `{.link ${path.join(dir, filepath)}${name ? ` | ${name}` : ""}}`;
    });

    text = text.replace(regexInclude, function (match, filepath) {
      console.log("Including", path.join(dir, filepath));

      text = preprocess(path.join(dir, filepath));

      return text;
    });

    filestack.pop();
    return text;
  }

  return preprocess;
})();

// Universally used converter
let converter = new showdown.Converter({
  extensions: [showdownHighlight]
});
converter.setFlavor("github");

// Function to build a Markdown file
let build = (function () {

  let builds = new Set();

  function build(entry) {
    console.log("Building", entry);

    // Avoid building a same entry twice
    if (builds.has(entry)) {
      console.log("Skipping", entry, "already built");
      return;
    }

    builds.add(entry);

    // Preprocess the text
    // Build & link related documents

    let dir = path.dirname(entry);
    let text = preprocess(entry);

    // Headings

    let headinglevel = 1;

    text = text.replace(regexHeading, function (match, op, heading) {
      switch (op) {
        case "+": ++headinglevel; break;
        case "-": --headinglevel; break;
        default:
          return headinglevel >= 1 && headinglevel <= 6
            ? ("#".repeat(headinglevel) + (heading ? ` ${heading}` : ""))
            : "";
      }
      return "";
    });

    // Links

    text = text.replace(regexLink, function(match, filepath, name) {

      let html = build(filepath);

      console.log("Linking", path.join(dir, filepath));

      let url = path.relative(dir, replaceExt(filepath, ".html"));

      return `[${name || url}](${url})`;
    });

    // Convert Markdown to HTML

    let html = converter.makeHtml(text);

    // Save the generated HTML

    let filepath = path.join("dist", path.relative("src", replaceExt(entry, ".html")));
    let filedir = path.dirname(filepath)

    fs.ensureDirSync(filedir);

    fs.writeFileSync(filepath, `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Fall 2017 Tutoring</title>
          <link rel="stylesheet" type="text/css" href="${path.relative(filedir, "dist") || "."}/assets/styles/main.css">
        </head>
        <body>
          ${html}
          <footer>
            <p>This page was last generated on ${new Date().toString()}</p>
            <p><a href="https://mintkit.net" target="_blank">Zhuo Lu</a> © 2017</p>
          <footer>
        </body>
      </html>`);

  }

  return build;
})();

// Website entries
let entries = ["src/index.md"].concat(fs.readdirSync("src/compilations").map(file => path.join("src/compilations", file)));

// Build each Markdown entry
entries.forEach(build);

// Copy assets
fs.copySync("src/assets", "dist/assets");

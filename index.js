
"use strict";

const path = require("path");
const fs = require("fs-extra");
const showdown = require("showdown");
const replaceExt = require("replace-ext");
const highlight = require("highlight.js");
const decodeHTML = require("html-encoder-decoder").decode;
const util = require("./util");

// Regex's
let regexLink = /{\.link\s+([^|]*)(?:\s+\|\s+([^}]*))?\s*}/g;
let regexInclude = /{\.include\s+([^}]*)\s*}/g;
let regexHeading = /{\.#([^}]*)\s*([^}]*)\s*}/g;

// Preprocessor to expand all file includes and resolve relative links
let preprocess = (function () {

  let filestack = [];

  function preprocess(entry) {
    filestack.push(entry);

    let dir = path.dirname(entry);
    let text;

    // Dynamic content flag, require page rebuilding
    let dynamic = false;

    // Fetch raw text

    switch (path.extname(entry)) {
      case ".js":
        text = require("./" + path.join(path.dirname(entry), path.basename(entry, ".js")))();
        dynamic = true;
        break;
      default:
        text = fs.readFileSync(entry, "utf8");
    }

    // Resolve relative links

    text = text.replace(regexLink, function (match, filepath, name) {
      return `{.link ${path.join(dir, filepath)}${name ? ` | ${name}` : ""}}`;
    });

    // Include text fragments

    let includes = [];
    text = text.replace(regexInclude, function (match, filepath) {
      filepath = path.join(dir, filepath);

      includes.push(filepath);

      console.log("Including", filepath);

      let preprocessed = preprocess(filepath);

      // Propagate dynamic content flag
      if (preprocessed.dynamic) dynamic = true;
      // Flatten included fragments
      includes.push(...preprocessed.includes);

      return preprocessed.text;
    });

    filestack.pop();

    return {
      text,
      dynamic,
      includes
    };
  }

  preprocess.supportedExt = [".md", ".js"];

  return preprocess;
})();

// Universally used converter
let converter = new showdown.Converter();
converter.setFlavor("github");

// Function to build a Markdown file
let build = (function () {

  function _build(entry) {

    if (preprocess.supportedExt.indexOf(path.extname(entry).toLowerCase()) < 0) {
      // Only preprocess & convert supported files

      console.log("Copying", entry);

      let filepath = path.join("dist", path.relative("src", entry));
      let filedir = path.dirname(filepath);

      fs.ensureDirSync(filedir);

      fs.copySync(entry, filepath);

      return {
        src: entry,
        dest: filepath,
        time: new Date().valueOf()
      };
    }

    // Preprocess the text
    // Build & link related documents

    console.log("Building", entry);

    // Input dir
    let dir = path.dirname(entry);

    // Output path & dir
    let filepath = path.join("dist", path.relative("src", replaceExt(entry, ".html")));
    let filedir = path.dirname(filepath);

    // Input text
    let preprocessed = preprocess(entry);
    let text = preprocessed.text;

    // Headings

    let headinglevel = 1;

    function makeHeading(headinglevel, heading) {
      return headinglevel >= 1 && headinglevel <= 6
        ? ("#".repeat(headinglevel) + (heading ? ` ${heading}` : ""))
        : "";
    }

    text = text.replace(regexHeading, function (match, op, heading) {
      switch (op) {
        case "++": ++headinglevel; break;
        case "--": --headinglevel; break;
        case "+": return makeHeading(headinglevel + 1, heading);
        case "-": return makeHeading(headinglevel - 1, heading);
        default: return makeHeading(headinglevel, heading);
      }
      return "";
    });

    // Links

    let links = [];
    text = text.replace(regexLink, function(match, entry, name) {
      links.push(entry);

      let linkedfilepath = build(entry).dest;

      let url = path.relative(
        filedir,
        path.extname(linkedfilepath) === ".html"
          ? path.basename(linkedfilepath, ".html") === "index"
            ? path.dirname(linkedfilepath)                      // Avoid index.html
            : replaceExt(linkedfilepath, "")                    // Avoid .html file extension
          : linkedfilepath
      );

      return `[${name || url}](${url})`;
    });

    // Convert Markdown to HTML

    let html = converter.makeHtml(text);

    // Code coloring

    // Code adapted from: https://github.com/Bloggify/showdown-highlight
    html = showdown.helper.replaceRecursiveRegExp(html, function (wholeMatch, match, left, right) {
      match = decodeHTML(match);
      return left + highlight.highlightAuto(match).value + right;
    }, "<pre><code\\b[^>]*>", "</code></pre>", "g");

    // Editable code

    html = html.replace(/_{10}/g, function (match) {
      return `<span contenteditable spellcheck="false"></span>`;
    });

    // Save the generated HTML

    fs.ensureDirSync(filedir);

    fs.writeFileSync(filepath, `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Fall 2017 Tutoring</title>
          <link rel="stylesheet" type="text/css" href="${path.relative(filedir, "dist") || "."}/assets/styles/main.css">
          <script type="text/javascript" src="${path.relative(filedir, "dist") || "."}/assets/scripts/main.js"></script>
        </head>
        <body>
          ${html}
          <footer>
            <p>This page was last generated on ${util.getTimestamp()}.<br>If you think you've found a bug, please <a href="https://github.com/sethlu/fa17-tutoring/issues" target="_blank">report it on GitHub</a>, thanks!</p>
            <p><a href="https://mintkit.net" target="_blank">Zhuo Lu</a> © 2017</p>
          </footer>
        </body>
      </html>`);

    return {
      src: entry,
      dest: filepath,
      time: new Date().valueOf(),
      dynamic: preprocessed.dynamic,
      links,
      includes: preprocessed.includes
    };
  }

  // Cache last modified times for files

  let mtimes = {};

  function getLastModifiedTime(filepath) {
    if (!mtimes[filepath]) {
      let stats = fs.statSync(filepath);
      mtimes[filepath] = new Date(stats.mtime).valueOf();
    }
    return mtimes[filepath];
  }

  let scriptmtime = getLastModifiedTime(__filename);

  // Cache build history

  let builds;
  try {
    builds = JSON.parse(fs.readFileSync("tmp/builds.json", "utf8"));
  } catch (e) {

  } finally {
    // Enfore builds as object
    if (typeof builds !== "object" || !builds) builds = {};
  }

  // Register process-on-exit handler

  process.on("exit", function (e) {

    console.log("Caching builds...");

    fs.ensureDirSync("tmp");

    fs.writeFileSync("tmp/builds.json", JSON.stringify(builds, function (key, value) {
      if (typeof value === "boolean") {
        return value || undefined; // Only save true value
      }
      if (Array.isArray(value)) {
        return value.length > 0 ? value : undefined; // Only save non-empty array
      }
      return value;
    }, "  "));

  });

  // Exposed build function

  function build(entry) {
    let cache;

    // Avoid building a same entry twice
    if (builds[entry]) {
      cache = builds[entry];

      if (cache.dynamic) {
        // Require rebuild

        cache = null;

      } else {
        // Detect rebuild

        let entries = [entry].concat(cache.includes || []);
        for (let entry of entries) {

          let entrymtime = getLastModifiedTime(entry);
          if (entrymtime > cache.time || scriptmtime > cache.time) {
            // Build outdated, either due to source modification or script modification
            cache = null;
            break;
          }

        }

      }

    }

    // If already built, do not rebuild
    if (cache) {

      console.log("Skipping", entry, "already built");

      // Check linked files' statuses
      if (cache.links) {
        cache.links.forEach(build);
      }

      return cache;
    }

    cache = _build(entry);

    builds[entry] = cache;

    return cache;
  }

  return build;
})();

// Website entries
let entries = ["src/index.md"];

// Build each Markdown entry
entries.forEach(build);

// Copy assets
fs.copySync("src/assets", "dist/assets");
fs.copySync("node_modules/highlight.js/styles/atom-one-light.css", "dist/assets/styles/atom-one-light.css");

console.log(`Built: ${util.getTimestamp()}`);

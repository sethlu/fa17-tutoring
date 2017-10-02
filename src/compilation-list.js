
"use strict";

const path = require("path");
const fs = require("fs-extra");
const replaceExt = require("replace-ext");

function getTimestamp(str) {
  let parts = str.split("-");
  let len = parts.length;
  if (len >= 3 && len <= 5) {
    let date = [parts[0], parts[1], parts[2]].join("/");
    if (len >= 4) {
      date += ` ${parts.slice(3).join(":")} pm`;
    }
    return date;
  }
  return str;
}

function html() {
  return fs.readdirSync(path.join(__dirname, "compilations"))
    .map(file => `- {.link ${path.join("compilations", file)} | ${getTimestamp(replaceExt(file, ""))}}`)
    .join("\n");
}

module.exports = html;

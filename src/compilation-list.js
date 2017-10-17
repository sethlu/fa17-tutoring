
"use strict";

const path = require("path");
const fs = require("fs-extra");
const replaceExt = require("replace-ext");
const util = require("../util");

function parseDate(str) {
  let parts = str.split("-").slice(0, 5).map(str => parseInt(str));
  let len = parts.length;
  let date = new Date();

  // Use a better way to do this
  if (len >= 3) {
    date.setMonth(parts[0] - 1);
    date.setDate(parts[1]);
    date.setYear(parts[2] + 2000);
    if (len >= 4) date.setHours(parts[3] + (parts[3] <= 6 ? 12 : 0));
    else date.setHours(0);
    if (len >= 5) date.setMinutes(parts[4]);
    else date.setMinutes(0);
  }

  return date;
}

function html() {
  return fs.readdirSync(path.join(__dirname, "compilations"))
    .map(file => [parseDate(replaceExt(file, "")), file])
    .sort((file1, file2) => file1[0] - file2[0])
    .map(file => `- {.link ${path.join("compilations", file[1])} | ${util.getTimestamp(file[0])}}`)
    .join("\n");
}

module.exports = html;

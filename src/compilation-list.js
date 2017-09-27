
const path = require("path");
const fs = require("fs-extra");
const replaceExt = require("replace-ext");

function html() {
  return fs.readdirSync(path.join(__dirname, "compilations"))
    .map(file => `- {.link ${path.join("compilations", file)} | ${replaceExt(file, "")}}`)
    .join("\n");
}

module.exports = html;

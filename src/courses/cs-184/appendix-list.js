const fs = require("fs");
const path = require("path");

module.exports = function () {
    return fs.readdirSync(path.join(__dirname, "appendices"))
        .filter((entry) => entry)
        .sort((a, b) => a.index - b.index)
        .map((entry) => {
            return `
{.#} {.link appendices/${entry} | ${path.basename(entry, ".md")}}
            `;
        })
        .join("\n");
};

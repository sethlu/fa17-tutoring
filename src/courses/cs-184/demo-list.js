const fs = require("fs");
const path = require("path");

module.exports = function () {
    return fs.readdirSync(path.join(__dirname, "demos"))
        .filter((entry) => entry)
        .sort((a, b) => a.index - b.index)
        .map((entry) => {
            return `
{.#} {.link demos/${entry} | ${entry}}
            `;
        })
        .join("\n");
};

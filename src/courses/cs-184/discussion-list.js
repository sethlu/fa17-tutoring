const fs = require("fs");
const path = require("path");

module.exports = function () {
    return fs.readdirSync(path.join(__dirname, "discussions"))
        .map((filename) => {
            const found = filename.match(/(\d+)/);
            if (!found) return null;

            const entry = {
                index: parseInt(found[1])
            };

            const infoFilepath = path.join(__dirname, "discussions", filename, "info.json");
            if (fs.existsSync(infoFilepath)) {
                entry.info = JSON.parse(fs.readFileSync(infoFilepath));
            }

            return entry;
        })
        .filter((entry) => entry)
        .sort((a, b) => a.index - b.index)
        .map((entry) => {
            return `
{.#} {.link discussions/${entry.index}/index.md | Discussion ${entry.index}}${entry.info ? `: ${entry.info.topics.join(", ")}` : ""}
            `;
        })
        .join("\n");
};

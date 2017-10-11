
"use strict";

module.exports.getTimestamp = function (date) {
  if (!date) date = new Date();
  let text = [date.getMonth() + 1, date.getDate(), date.getFullYear() - 2000].join("/");
  if (date.getHours() > 0 || date.getMinutes() > 0) {
    text += " " + [date.getHours() % 12, date.getMinutes().toString().padStart(2, "0")].join(":") + " " + (date.getHours() < 12 ? "am" : "pm");
  }
  return text;
}

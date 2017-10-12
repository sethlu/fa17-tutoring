
"use strict";

// Polyfill

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength,padString) {
    targetLength = targetLength>>0; //floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length > targetLength) {
      return String(this);
    }
    else {
      targetLength = targetLength-this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0,targetLength) + String(this);
    }
  };
}

// Format timestamp

module.exports.getTimestamp = function (date) {
  if (!date) date = new Date();
  let text = [date.getMonth() + 1, date.getDate(), date.getFullYear() - 2000].join("/");
  if (date.getHours() > 0 || date.getMinutes() > 0) {
    text += " " + (date.getHours() % 12);
    if (date.getMinutes() > 0) {
      text += ":" + date.getMinutes().toString().padStart(2, "0");
    }
    text += " " + (date.getHours() < 12 ? "am" : "pm");
  }
  return text;
}

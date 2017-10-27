
window.addEventListener("DOMContentLoaded", function () {

  // Code adapted from: https://stackoverflow.com/questions/34764304/contenteditable-allowing-only-plain-text

  function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        rangevent.deleteContents();
        rangevent.insertNode(document.createTextNode(text));
      }
    } else if (document.selection && document.selection.createRange) {
      document.selection.createRange().text = text;
    }
  }

  var codeFragment = document.querySelector("code [contenteditable]");

  codeFragment.addEventListener("keypress", function (event) {
    if (event.which == 13) {
      event.preventDefault();
    }
  });

  codeFragment.addEventListener("paste", function(event) {
    event.preventDefault();
    if (event.clipboardData && event.clipboardData.getData) {
      var text = event.clipboardData.getData("text/plain").replace("\n", " ");
      document.execCommand("insertHTML", false, text);
    } else if (window.clipboardData && window.clipboardData.getData) {
      var text = window.clipboardData.getData("Text").replace("\n", " ");
      insertTextAtCursor(text);
    }
  });

});

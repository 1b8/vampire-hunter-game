var promptResponse = null;

function vhPrompt(question, options, response) {
  var html = question + "<br>";
  for (var i = 0; i < options.length; i++) {
    html += '<br><a href="#" onclick="promptResponse(\'' + i + '\');">[' + options[i] + ']</a>';
  }
  promptResponse = response;
  page.main = html;
}

var msgs = page.el("msgs");

player.msg = function(msg) {
  // Put the msg (wrapped in <p></p>) on the top of the msg list
  var el = page.newEl("P");
  el.appendChild(document.createTextNode(msg));
  msgs.insertBefore(el, msgs.childNodes[0]);
};

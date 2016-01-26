var FriendlyAttacker = require('./attackers').Friendly;
var page = require('./page');
var msgs = page.el("msgs");

var player = module.exports =
  new FriendlyAttacker(50, [], 0); // (health, inv, cash)

player.xp = 0;

player.msg = function(msg) {
  // Put the msg (wrapped in <p></p>) on the top of the msg list
  var el = page.newEl("P");
  el.appendChild(document.createTextNode(msg));
  msgs.insertBefore(el, msgs.childNodes[0]);
};

player.updateDisplay = function() {
  // TODO Also update stats (constitution, etc.) and experience (this.xp) level

  page.el("avatar").src = "imgs/" + (this.character ? this.character : "unknown") + ".png";
};

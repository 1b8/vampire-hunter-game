var player = new FriendlyAttacker(50, [], 0); // (health, inv, cash)

player.xp = 0;

player.msg = function() {
  // TODO make player.msg() function
};

player.updateDisplay = function() {
  // TODO Also update stats (constitution, etc.) and experience (this.xp) level

  page.el("avatar").src = "imgs/" + (this.character ? this.character : "unknown") + ".png";
};

var player = new FriendlyAttacker(50, [], 0); // (health, inv, cash)

// player.msg moved to prompt.js

player.updateDisplay = function() {
  util.$("avatar").src = "imgs/" + (this.character ? this.character : "unknown") + ".png";
};

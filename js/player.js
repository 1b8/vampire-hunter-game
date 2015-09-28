var player = new FriendlyAttacker(50, [], 0); // (health, inv, cash)
player.msg = function() {
  // TODO make player.msg() function
};
player.updateDisplay = function() {
  document.getElementById("avatar").src = "imgs/" + this.character + ".png";
};

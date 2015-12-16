
if (!player.character) { // Make sure player.character hasn't been set by save.js

  vhPrompt("Welcome to <cite>Mark Twain, Vampire Hunter: The Game</cite>. Please select a character.", [
    "Mark Twain", "Abraham Lincoln"
  ], function (response) {
    switch (response) {
      case 0:
        player.character = "mark-twain";
        break;
      case 1:
        player.character = "abraham-lincoln"
    }
    player.updateDisplay();
  });

  // TODO add avatars to imgs/ directory
}

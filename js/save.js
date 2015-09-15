if (localStorage) {
  var dataToSave = [
    "character"
  ];

  function save() {
    for (var i = 0; i < dataToSave.length; i++) {
      var key = dataToSave[i];
      localStorage.setItem("vh_" + key, window[key]);
    }
  }


// Load data from localStorage
player.msg("Loading saved game...");
for (var i = 0; i < dataToSave.length; i++) {
  var key = dataToSave[i];
  window[key] = localStorage.getItem("vh_" + key);
}

} else {
  player.msg("WARNING: Your browser does not support HTML5 web storage! You will not be able to save your game unless you update your browser (or get a different one)!");
}

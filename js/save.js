if (localStorage) {
  var storePre = "vh_";

  var dataToSave = [
    "player.character"
  ];

  function dotNotation(str, newVal) {
    var split = str.split(".");
    var current = window;
    var last = split[split.length-1];

    // Only go up to before the last item;
    // "current = newVal" would only set the reference otherwise
    for (var i = 0; i < split.length-1; i++) {
      current = current[split[i]];
    }

    if (newVal !== undefined) {
      current[last] = newVal;
    }
    
    return current[last];
  }

  function save() {
    for (var i = 0; i < dataToSave.length; i++) {
      var key = dataToSave[i];
      localStorage.setItem(storePre + key, dotNotation(key));
    }
  }

  var firstItem = localStorage.getItem(storePre + dataToSave[0]);
  if (firstItem !== undefined) { // Use the first item to check if there's saved data
    player.msg("Loading saved game...");
    // Load data from localStorage
    dotNotation(dataToSave[0], firstItem); // Use the firstItem already in memory
    for (var i = 1; i < dataToSave.length; i++) {
      var key = dataToSave[i];
      dotNotation(key, localStorage.getItem(storePre + key));
    }
  }

} else {
  player.msg("WARNING: Your browser does not support HTML5 web storage! You will not be able to save your game unless you update your browser (or get a different one)!");
}

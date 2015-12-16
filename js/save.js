if (localStorage) {
  var storeVarName = "vhData";

  var dataToSave = [
    "player.character",
    {
      get: "player.getHealth",
      set: "player.setHealth"
    }
  ];

  function dotNotation(path, newVal) {
    var split = path.split(".");
    var current = window;
    var last = split[split.length-1];

    // Only go up to before the last item;
    // "current = newVal" would only set the reference otherwise
    for (var i = 0; i < split.length-1; i++) {
      current = current[split[i]];
    }

    if (typeof newVal !== "undefined") {
      current[last] = newVal;
    }
    return current[last];
  }

  function save() {
    var data = {};
    for (var i = 0; i < dataToSave.length; i++) {
      var key = dataToSave[i];

      if (typeof key === "string") data[key] = dotNotation(key);
      else data[key] = (dotNotation(key.get))();
    }
    localStorage.setItem(storeVarName, JSON.stringify(data));
  }

  var data = JSON.parse(localStorage.getItem(storeVarName));

  if (data) {
    player.msg("Loading saved game...");

    // Load data from localStorage
    for (var i = 0; i < dataToSave.length; i++) {
      var key = dataToSave[i];
      if (typeof key === "string") dotNotation(key, data[key]);
      else (dotNotation(key.set))(data[key]);
    }
  }

} else {
  player.msg("WARNING: Your browser does not support HTML5 web storage! You will not be able to save your game unless you update your browser (or get a different one)!");
}

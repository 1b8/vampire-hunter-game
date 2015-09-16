function setMain(html) {
  document.getElementById("vh-main").innerHTML = html;
}

var player = {
  msg: function() {
    // TODO make player.msg() function
  },
  inv: {
    items: [],
    cash: 0
  },

  updateDisplay: function() {
    document.getElementById("avatar").src = "imgs/" + this.character + ".png";
  }
};

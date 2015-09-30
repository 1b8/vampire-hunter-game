var quests = {
  current: {},
  complete: {},

  updateDisplay: function() {
    // TODO Add updateDisplay() function to update list on screen
  }
};

function Quest (id, desc, reward) {
  this.desc = desc;
  this.reward = reward;

  this.percentDone = 0;
}

Quest.prototype = {
  start: function() {
    quests.current[id] = this;
    quests.updateDisplay();
  },

  finish: function() {
    quests.complete[id] = this;
    delete quests.current[id];
    quests.updateDisplay();

    player.msg("Quest complete!"); // TODO Make message more detailed

    if (typeof this.reward.cash === "number") player.inv.cash += this.reward.cash;
    if (typeof this.reward === "object") {
      for (var i = 0; i < this.reward.length; i++) {
        player.inv.push(this.reward.items[i]);
      }
    }
  }
};

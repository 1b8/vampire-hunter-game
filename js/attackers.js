function Attacker(health, inv, cash) {
  // "health" is handled by Attacker.prototype.getHealth() and Attacker.prototype.setHealth()
  this.inv = inv;
  this.inv.cash = cash;
  this.isPlayer = false;
}

Attacker.prototype = {

  getHealth: function() {return health;},

  setHealth: function(newHealth, source) {
    if (this.isPlayer) {
      var msgEnd;
      if (newHealth < health) {
        msgEnd = "hit you for " + (health - newHealth) + " damage!";
      } else if (newHealth > health) {
        msgEnd = "healed you for " + (newHealth - health) + " health!";
      } else { // If it's 0
        msgEnd = "missed!";
      }
      this.msg("The " + source.name + " " + msgEnd);
    }
    health = newHealth;
  },

  startAttack: function(defender) {
    if (defender.isPlayer) {
      util.setMain("A wild " + this.name + " has appeared!");
    }

    /*
    Not sure how to do this...
    TODO attack prompt player.......
    */
  }

};


// NOTE: The constructors are automatically set to "Attacker"

function HostileAttacker() {}
HostileAttacker.prototype = Object.create(Attacker.prototype);

function FriendlyAttacker() {}
FriendlyAttacker.prototype = Object.create(Attacker.prototype);

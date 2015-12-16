function Attacker(health, inv, cash, stats) {
  this.inv = inv;
  this.inv.cash = cash;
  this.stats = stats ? stats : {};

  // Getter and setter for health, as the constructor function's local variable
  // cannot be accessed outside the constructor's scope
  this.getHealth = function() {return health;};
  this.setHealth = function(newHealth, source) {
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
  };
}

Attacker.prototype.startAttack = function(defender) {
  if (defender.isPlayer) {
    util.setMain("A wild " + this.name + " has appeared!");
  }

  /* TODO attack prompt player....... */

};

// NOTE: The constructors are automatically set to "Attacker"

function HostileAttacker() {}
HostileAttacker.prototype = Object.create(Attacker.prototype);

function FriendlyAttacker() {}
FriendlyAttacker.prototype = Object.create(Attacker.prototype);

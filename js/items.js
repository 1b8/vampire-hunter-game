module.exports = Item;
Item.types = itemTypes;

function Type(name, price) {
  this.name = name;
  this.price = price;
}

var itemTypes = {
  testItem: new Type("Test Item!", 500)
};

function Item(type, edit) {
  this.type = type;

  // Copy over all the data from itemTypes[type]
  var c = itemTypes[type];
  for (var prop in c) {
    this[item] = c[item];
  }

  if (edit) edit(this);
}


Item.prototype.clone = function() {
  return new Item(this.type, function(item) {
    // Copy over the data
    for (var prop in this) {
      item[prop] = this[prop];
    }
  });
};

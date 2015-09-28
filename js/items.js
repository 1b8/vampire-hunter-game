var main = document.getElementById("main");
function setMain(html) {
  main.innerHTML = html;
}

function addToMan(html) {
  main.innerHTML += html;
}

function ItemType(name, price) {
  this.name = name;
  this.price = price;
}

var itemTypes = {
  testItem: new ItemType("Test Item!", 500);
};

function Item(type, edit) {
  this.type = type;

  // Copy over all the data from itemTypes[type]
  var c = itemTypes[type];
  for (var prop in c) {
    this[item] = c[item];
  }

  if (edit !== undefined) edit(this);
}


Item.prototype = {
  clone: function() {
    return new Item(this.type, function(item) {
      // Copy over the data
      for (var prop in this) {
        item[prop] = this[prop];
      }
    });
  }
};

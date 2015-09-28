function Shop(items) {
  this.items = items;
}

Shop.prototype = {
  show: function() {
    var table = document.createElement("TABLE");

    for (var i = 0; i < this.items.length; i++) {
      var tr = document.createElement("TR");
      var itemRow = this.items[i];

      for (var j = 0; j < itemRow.length; i++) {
        var td = document.createElement("TD");
        var item = itemsRow[j];

        td.innerHTML = '<a href="#" onclick="shop.buy(' + i + ',' + j + ');">[' + item.name + ']</a>'; // TODO Add stats & price, maybe add images?

        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
  },

  buy: function(i, j) {
    var item = this.items[i][j];
    if (player.inv.cash < item.price) player.msg("You don't have enough cash for that!"); return;

    var quantity = 1;
    player.inv.add(item.clone(1));
  }
};

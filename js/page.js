// No need to install jQuery...

var main = page.el('main');

module.exports = {

  el: function (id) {
    return document.getElementById(id);
  },

  newEl: function (tag) {
    return document.createElement(tag);
  },

  newTextNode: function (text) {
    return document.createTextNode(text);
  },

  get main() {
    return main;
  },

  set main(html) {
    main.innerHTML = html;
  }

};

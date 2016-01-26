// No need to install jQuery...

var page = module.exports = {

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

var main = page.el('main');

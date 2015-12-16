
/*
  No need to install jQuery...
  Note that `util.$` just takes the id,
  not a selector
*/

var main = $("main");

var util = {

  $: function (id) {
    return document.getElementById(id);
  },

  $n: function (tag) {
    return document.createElement(tag);
  },

  setMain: function (html) {
    main.innerHTML = html;
  },

  addToMain: function (html) {
    main.innerHTML += html;
  }

};

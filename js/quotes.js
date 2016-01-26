var markov = require('markov')();

exports.inspiration = function () {};

m.seed(data, function () {
  exports.inspiration = insp;
  function insp() {
    return m.respond(m.pick()).join(' ');
  };
  for(var i=0;i<10;i++) console.log(insp());
});

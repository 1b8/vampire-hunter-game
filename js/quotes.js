var m = require('markov')();

exports.inspiration = function () {};

require('fs').readFile('quotes.txt', 'utf8', function (err, data) {
  if (err) throw err;

  m.seed(data, function () {
    exports.inspiration = insp;
    function insp() {
      return m.fill(m.pick(), 5).join(' ');
    };
    console.log(insp());
  });
});

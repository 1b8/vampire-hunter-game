var promptResponse = null;

module.exports = function (question, options, response) {
  var html = question + "<br>";
  for (var i = 0; i < options.length; i++) {
    html += '<br><a href="#" onclick="promptResponse(\'' + i + '\');">[' + options[i] + ']</a>';
  }
  promptResponse = response;
  require('./page').main = html;
}

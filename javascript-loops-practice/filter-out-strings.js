/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    var typeOfValue = typeof values[i];
    if (typeOfValue !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}

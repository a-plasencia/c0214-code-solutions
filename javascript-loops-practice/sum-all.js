/* exported sumAll */
function sumAll(numbers) {
  var sumOf = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumOf = sumOf + numbers[i];
  }
  return sumOf;
}

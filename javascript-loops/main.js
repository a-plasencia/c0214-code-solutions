/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}
console.log('The value of getNumbersToTen is: ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('The value of getEvenNumbers is: ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

console.log(
  'Calling the word JavaScript in repeatWord 30 times',
  repeatWord('JavaScript', 30)
);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log('The value of string[i] is: ', string[i]);
  }
}

logEachCharacter('JavaScript');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    var doubledNumber = numbers[i] * numbers[i];
    doubled.push(doubledNumber);
  }
  return doubled;
}

var doubleArray = [1, 5, 8, 10];
console.log('The value of doubleArrayTwo is: ', doubleAll(doubleArray));

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

var teams = {
  football: 'raiders',
  basketball: 'lakers',
  baseball: 'dodgers',
};

console.log('value of getkeys: is: ', getKeys(teams));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log('value of getValues is: ', getValues(teams));

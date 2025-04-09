function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}

var fiveMinutesResult = convertMinutesToSeconds(5);
console.log('convert fiveMinutesResult is: ', fiveMinutesResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = 'beavis';
console.log('value of greetResult is: ', greet(greetResult));

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 50);
console.log('The value of getAreaResult is : ', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = {
  firstName: 'Lelouche',
  lastName: 'Lamprouge',
};

console.log(
  'value of getFirstNameResult is: ',
  getFirstName(getFirstNameResult)
);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

var getLastElementResult = ['propane', 'and', 'propane', 'accessories'];
console.log(
  'value of getLastElementResult is: ',
  getLastElement(getLastElementResult)
);

console.log('Hello world');
var num1 = 20;
var num2 = 96;
var num3 = 56;
var maximumValue = Math.max(num1, num2, num3);
console.log('Value of the sumOf is: ', maximumValue);

var heroes = ['ironman', 'batman', 'superman', 'spiderman'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex is: ', randomIndex);

randomHero = heroes[randomIndex];
console.log('Value of randomHero is: ', randomHero);

var library = [
  {
    title: 'HTML tutorial',
    author: 'Jduckett',
  },
  {
    title: 'CSS teaching',
    author: 'zayn',
  },
  {
    title: 'Node.js big secret',
    author: 'express',
  },
];

var lastBook = library.pop();
console.log('Value of lastBook is: ', lastBook);

var firstBook = library.shift();
console.log('Value of firstBook is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library array is: ', library);

var fullName = 'Alex Plasencia';
var firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName is: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName is: ', sayMyName);

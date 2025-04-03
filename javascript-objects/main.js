console.log('hello world');

var student = {
  firstName: 'Alexander ',
  lastName: 'Plasencia',
  age: 29,
};

var fullName = student.firstName + student.lastName;
console.log('Value of fullName is: ', fullName);

student.likesInIrvine = false;
student.previousOccupation = 'Coding instructor';

console.log('Value of likesInIrvine is: ', student.likesInIrvine);
console.log('Value of previousOccupation is: ', student.previousOccupation);
console.log('Value of entire object of student is: ', student);

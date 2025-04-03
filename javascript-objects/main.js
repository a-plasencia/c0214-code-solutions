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

var vehicle = {
  make: 'Hyundai',
  model: 'Kona',
  year: 2019,
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Value of color is: ', vehicle.color);
console.log('Value of isConvertible is: ', vehicle.isConvertible);
console.log('Value of entire vehicle object is: ', vehicle);

var pet = {
  name: 'Kobe',
  type: 'Dog',
};

delete pet.name;
delete pet.type;
console.log('Value of entire pet object is: ', pet);

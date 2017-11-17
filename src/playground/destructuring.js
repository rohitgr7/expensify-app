//
// Object Destructuring
//

// const person = {
//   name: 'Mark',
//   age: 20,
//   location: {
//     city: 'New York',
//     temp: 20
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);
//
// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }





//
// Array Destructuring
//

const address = ['1299 S Junior Street', 'New York', 'Queens', '12931'];

const [, city, state = 'California'] = address;

console.log(`You are in ${city} ${state}.`);

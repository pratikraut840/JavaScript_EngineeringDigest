// ==================================================
// Objects in JavaScript
// ==================================================

// An object is a collection of key–value pairs in JavaScript
// Java uses HashMap, Python uses Dictionary

let person = {
    name: 'pratik',
    age: 30,
    city: 'pune',
    marks: 99.5
};

// Accessing object properties
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.marks);

// --------------------------------------------------
// Object Destructuring
// --------------------------------------------------

let { name, age, city, marks } = person;
console.log(name);

// --------------------------------------------------
// Object Utility Methods
// --------------------------------------------------

// Object.keys() → returns all keys as an array
console.log(Object.keys(person));

// Object.values() → returns all values as an array
console.log(Object.values(person));

// Object.entries() → returns key–value pairs as arrays
console.log(Object.entries(person));

// hasOwnProperty() → checks if a key exists in the object
console.log('hasOwnProperty :' + person.hasOwnProperty('name'));

// --------------------------------------------------
// Shallow Copy Comparison (Non-Primitive)
// --------------------------------------------------

let obj1 = { name: 'raj', age: 30 };
let obj2 = { name: 'raj', age: 30 };

console.log(obj1 == obj2); 
// false → non-primitive data types are stored in different memory locations

// --------------------------------------------------
// Primitive Value Comparison (Deep Copy behavior)
// --------------------------------------------------

let s1 = 'pratik';
let s2 = 'pratik';

console.log(s1 == s2); 
// true → primitive data types compare by value

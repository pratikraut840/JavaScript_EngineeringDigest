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

// --------------------------------------------------
// Accessing object properties
// --------------------------------------------------

// Access using dot notation
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Marks:", person.marks);

// --------------------------------------------------
// Object Destructuring
// --------------------------------------------------

// Extract multiple properties into variables
let { name, age, city, marks } = person;
console.log("Destructured Name:", name);

// --------------------------------------------------
// Object Utility Methods
// --------------------------------------------------

// Object.keys(obj) → Returns all keys of the object as an array
console.log("Keys:", Object.keys(person));

// Object.values(obj) → Returns all values of the object as an array
console.log("Values:", Object.values(person));

// Object.entries(obj) → Returns key–value pairs as nested arrays
console.log("Entries:", Object.entries(person));

// hasOwnProperty(key) → Checks if object contains a specific key (returns boolean)
console.log("Has 'name' property:", person.hasOwnProperty('name'));

// --------------------------------------------------
// Shallow Copy Comparison (Non-Primitive)
// --------------------------------------------------

// Non-primitive objects are stored in memory by reference
let obj1 = { name: 'raj', age: 30 };
let obj2 = { name: 'raj', age: 30 };

// Comparing two objects directly → false, because references are different
console.log("obj1 == obj2:", obj1 == obj2); 

// --------------------------------------------------
// Primitive Value Comparison (Deep Copy behavior)
// --------------------------------------------------

// Primitive data types (string, number, boolean) are compared by value
let s1 = 'pratik';
let s2 = 'pratik';

// Comparing two strings → true, because values are the same
console.log("s1 == s2:", s1 == s2); 

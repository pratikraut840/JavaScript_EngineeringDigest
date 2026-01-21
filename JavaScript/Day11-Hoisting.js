// ==================================================
// Hoisting in JavaScript
// ==================================================

// Hoisting in JavaScript means variables and function
// declarations are moved to the top of their scope
// during the compilation phase, allowing them to be
// referenced before they are declared in the code.

// --------------------------------------------------
// Example (commented to avoid runtime error)
// --------------------------------------------------

// console.log(a); // Called before declaration
// let a = 10;     // Declared later

// During compilation, JavaScript treats it like this:
// let a;
// console.log(a); // undefined
// a = 10;

// --------------------------------------------------
// Valid example
// --------------------------------------------------

let b = 90;
console.log(b);

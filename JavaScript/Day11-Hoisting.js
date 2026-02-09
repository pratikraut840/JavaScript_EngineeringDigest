// ==================================================
// Hoisting in JavaScript
// ==================================================

// Hoisting → JavaScript's default behavior of moving
// variable and function declarations to the top of their scope
// during the compilation phase. This allows variables
// and functions to be referenced before they are declared.

// --------------------------------------------------
// Example with var (works because var is hoisted)
// --------------------------------------------------

console.log(x); // Output: undefined (declaration hoisted, value not yet assigned)
var x = 100;
console.log(x); // Output: 100

// --------------------------------------------------
// Example with let and const (temporal dead zone)
// --------------------------------------------------

// let and const are also hoisted, but they are in "temporal dead zone (TDZ)"
// Accessing them before declaration throws ReferenceError

// console.log(y); // ReferenceError
// let y = 50;

// console.log(z); // ReferenceError
// const z = 60;

// --------------------------------------------------
// Function Hoisting
// --------------------------------------------------

// Function declarations are fully hoisted, so they can be called before declaration
greet(); // Output: "Hello, Hoisting!"

function greet() {
    console.log("Hello, Hoisting!");
}

// Function expressions (assigned to variables) are not hoisted
// console.log(sayHello()); // Error if uncommented
let sayHello = function () {
    return "Hi!";
};
console.log(sayHello()); // Output: "Hi!"

// --------------------------------------------------
// Working example with let (recommended modern JS)
// --------------------------------------------------

let b = 90;
console.log("Modern let variable b =", b);

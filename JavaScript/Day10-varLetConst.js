// ==================================================
// Variables in JavaScript
// ==================================================

// --------------------
// var
// --------------------
// var → Function-scoped variable
// Can be redeclared and reassigned
// Avoid using in modern JS due to hoisting and scope issues

var a = 10; // declare
var a = 20; // redeclare allowed
a = 30;     // reassign allowed
console.log("var a =", a); // Output: 30

// --------------------
// let
// --------------------
// let → Block-scoped variable
// Cannot be redeclared in the same scope, but can be reassigned
// Preferred over var in modern JS

let b = 44; // declare
b = 45;     // reassign allowed
console.log("let b =", b); // Output: 45

// --------------------
// const
// --------------------
// const → Block-scoped constant variable
// Cannot be redeclared or reassigned
// Must be initialized at the time of declaration
// Note: Objects and arrays declared with const can still be mutated

const c = 90; // declare & initialize
console.log("const c =", c); // Output: 90

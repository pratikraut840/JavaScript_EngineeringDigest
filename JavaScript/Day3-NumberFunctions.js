// ==================================================
// Number Functions in JavaScript
// ==================================================

// --------------------------------------------------
// parseInt → converts string to integer
// --------------------------------------------------

let s1 = "12";
let p1 = parseInt(s1);
console.log(p1);

let s2 = '30 student 4.20';
let p2 = parseInt(s2); // stops parsing at first non-digit
console.log(p2);

// --------------------------------------------------
// parseFloat → converts string to floating-point number
// --------------------------------------------------

let s3 = '8.50 50 student ';
let p3 = parseFloat(s3);
console.log(p3);

// --------------------------------------------------
// toFixed → formats number to fixed decimal places
// --------------------------------------------------

let s4 = 2.45;
let p4 = s4.toFixed(4); // returns string "2.4500"
console.log(p4);

// --------------------------------------------------
// toString → converts number or value to string
// --------------------------------------------------

let s5 = " Raju Loco 33308";
let p5 = s5.toString();
console.log(p5);

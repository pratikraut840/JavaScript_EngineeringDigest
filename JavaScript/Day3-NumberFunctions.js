// ==================================================
// Number Functions in JavaScript
// ==================================================

// --------------------------------------------------
// parseInt → converts string to integer
// --------------------------------------------------

let s1 = "12";
let p1 = parseInt(s1);
console.log("1️⃣ parseInt(\"12\") →", p1, "| Type:", typeof p1);

let s2 = '30 student 4.20';
let p2 = parseInt(s2); // stops parsing at first non-digit
console.log("2️⃣ parseInt(\"30 student 4.20\") →", p2, "| Type:", typeof p2);

// --------------------------------------------------
// parseFloat → converts string to floating-point number
// --------------------------------------------------

let s3 = '8.50 50 student';
let p3 = parseFloat(s3);
console.log("3️⃣ parseFloat(\"8.50 50 student\") →", p3, "| Type:", typeof p3);

// --------------------------------------------------
// toFixed → formats number to fixed decimal places
// --------------------------------------------------

let s4 = 2.45;
let p4 = s4.toFixed(4); // returns string
console.log("4️⃣ (2.45).toFixed(4) →", p4, "| Type:", typeof p4);

// --------------------------------------------------
// toString → converts value to string
// --------------------------------------------------

let s5 = " Raju Loco 33308";
let p5 = s5.toString();
console.log("5️⃣ toString() →", p5, "| Type:", typeof p5);

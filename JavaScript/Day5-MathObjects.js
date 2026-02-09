// ==================================================
// Math Object in JavaScript
// ==================================================

// Math.round() → Rounds a number to the nearest integer
let num1 = 100.98;
let roundNum1 = Math.round(num1);
console.log("1️⃣ Math.round(100.98) →", roundNum1);

// --------------------------------------------------

// Math.floor() → Returns the largest integer less than or equal to the number
let num2 = 23.7;
let floorNum = Math.floor(num2);
console.log("2️⃣ Math.floor(23.7) →", floorNum);

// --------------------------------------------------

// Math.ceil() → Returns the smallest integer greater than or equal to the number
let num3 = 33.3;
let ceilNum = Math.ceil(num3);
console.log("3️⃣ Math.ceil(33.3) →", ceilNum);

// --------------------------------------------------

// Math.min() → Returns the smallest value from the given numbers
let min = Math.min(1, 44, 55, 66, 0);
console.log("4️⃣ Math.min(1, 44, 55, 66, 0) →", min);

// --------------------------------------------------

// Math.max() → Returns the largest value from the given numbers
let max = Math.max(1, 44, 55, 66, 0);
console.log("5️⃣ Math.max(1, 44, 55, 66, 0) →", max);

// --------------------------------------------------

// Math.pow() → Returns the value of a number raised to the power of another number
let num5 = 4;
let power = Math.pow(num5, 10);
console.log("6️⃣ Math.pow(4, 10) →", power);

// --------------------------------------------------

// Math.abs() → Returns the absolute (positive) value of a number
let num6 = -1160;
let abs = Math.abs(num6);
console.log("7️⃣ Math.abs(-1160) →", abs);

// --------------------------------------------------

// Math.sqrt() → Returns the square root of a number
let num7 = 1500;
let sqrt = Math.sqrt(num7);
console.log("8️⃣ Math.sqrt(1500) →", sqrt);

// --------------------------------------------------

// Math.random() → Returns a random number between 0 (inclusive) and 1 (exclusive)
let randomNum = Math.random() * 100;
console.log("9️⃣ Math.random() * 100 →", randomNum);

// --------------------------------------------------

// Math.random() with floor() → Generates a random large integer number
let random10 = Math.floor(Math.random() * 10e10);
console.log("🔟 Random Large Number (0 to 10e10) →", random10);

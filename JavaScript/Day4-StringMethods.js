// ==================================================
// String Methods in JavaScript
// ==================================================

// String initialization and quotes handling
let s1 = 'India'; 
let s2 = "Pune"; 
let s3 = `          Mumbai is the capital of Maharashtra       `;

// --------------------------------------------------
// String concatenation
// --------------------------------------------------

let s5 = s1 + " " + s2;
console.log("1️⃣ String Concatenation (s1 + s2) →", s5);

// String interpolation (template literals)
let newString = `${s1} ${s2}`;
console.log("2️⃣ String Interpolation (`${s1} ${s2}`) →", newString);

// --------------------------------------------------
// String properties and methods
// --------------------------------------------------

// length
let stringLength = s3.length;
console.log("3️⃣ Length of s3 (with spaces) →", stringLength);

// toUpperCase
let upperCase = s3.toUpperCase();
console.log("4️⃣ toUpperCase() →", upperCase);

// toLowerCase
let lowerCase = s3.toLocaleLowerCase();
console.log("5️⃣ toLowerCase() →", lowerCase);

// trim → removes whitespace from both ends
let trimStr = s3.trim();
console.log("6️⃣ trim() (remove extra spaces) →", trimStr);

// split → splits string into an array
let splitStr = trimStr.split(" ");
console.log("7️⃣ split(\" \") →", splitStr);

// indexOf → returns first index of character/string
let strIndex = s3.indexOf("M");
console.log("8️⃣ indexOf(\"M\") →", strIndex);

// lastIndexOf → returns last index of character/string
let lastIndex = s3.lastIndexOf("i");
console.log("9️⃣ lastIndexOf(\"i\") →", lastIndex);

// replace → replaces substring with new string
let strReplace = s3.replace('Maharashtra', 'India');
console.log("🔟 replace('Maharashtra','India') →", strReplace);

// substring → extracts part of string (start, end)
let subStr = s3.substring(10, 20);
console.log("1️⃣1️⃣ substring(10, 20) →", subStr);

// slice → extracts part of string (start, end)
let sliceStr = s3.slice(15, 30);
console.log("1️⃣2️⃣ slice(15, 30) →", sliceStr);

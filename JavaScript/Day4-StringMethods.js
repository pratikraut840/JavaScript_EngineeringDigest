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
console.log(s5);

// String interpolation (template literals)
let newString = `${s1} ${s2}`;
console.log(newString);

// --------------------------------------------------
// String properties and methods
// --------------------------------------------------

// length
let stringLength = s3.length;
console.log(stringLength);

// toUpperCase
let upperCase = s3.toUpperCase();
console.log(upperCase);

// toLowerCase
let lowerCase = s3.toLocaleLowerCase();
console.log(lowerCase);

// trim → removes whitespace from both ends
let trimStr = s3.trim();
console.log(trimStr);

// split → splits string into an array
let splitStr = trimStr.split(" ");
console.log(splitStr);

// indexOf → returns first index of character/string
let strIndex = s3.indexOf("M");
console.log(strIndex);

// lastIndexOf → returns last index of character/string
let lastIndex = s3.lastIndexOf("i");
console.log(lastIndex);

// replace → replaces substring with new string
let strReplace = s3.replace('Maharashtra', 'India');
console.log(strReplace);

// substring → extracts part of string (start, end)
let subStr = s3.substring(10, 20);
console.log(subStr);

// slice → extracts part of string (start, end)
let sliceStr = s3.slice(15, 30);
console.log(sliceStr);

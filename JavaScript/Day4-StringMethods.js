//String Methods

// String initialization and quotes handling
// single quote
let s1 = 'India';
let s2 = "Pune";
let s3 = `          Mumbai is the capital of Maharashtra       `;

//string concatination
let s5 = s1 + " " + s2;
console.log(s5);

//string interpolation
let newString = `${s1} ${s2}`;
console.log(newString);

//length
let stringLength = s3.length;
console.log(stringLength);

// upperCase
let upperCase = s3.toUpperCase();
console.log(upperCase);

//upperCase
let lowerCase = s3.toLocaleLowerCase();
console.log(lowerCase);

//.trim
let trimStr = s3.trim();
console.log(trimStr);

//split
let splitStr = trimStr.split(" ");
console.log(splitStr);

// indexOf
let strIndex = s3.indexOf("M");
console.log(strIndex);

//lastIndexOf
let lastIndex = s3.lastIndexOf("i");
console.log(lastIndex);

//replace
let strReplace = s3.replace('Maharashtra', 'India');
console.log(strReplace);

// substring
let subStr = s3.substring(10, 20);
console.log(subStr);

//slice
let sliceStr = s3.slice(15, 30);
console.log(sliceStr)


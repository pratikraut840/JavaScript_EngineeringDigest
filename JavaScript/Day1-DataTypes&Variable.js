// ==================================================
// Data Types in JavaScript
// ==================================================

// Number
let num1 = 10;
console.log("1️⃣ Number:", num1, "| Type:", typeof num1);

// String
let s1 = "India";
console.log("2️⃣ String (double quotes):", s1, "| Type:", typeof s1);

let s2 = 'Australia';
console.log("3️⃣ String (single quotes):", s2, "| Type:", typeof s2);

let s3 = `America`;
console.log("4️⃣ String (template literal):", s3, "| Type:", typeof s3);

// Boolean
let isSunday = true;
console.log("5️⃣ Boolean:", isSunday, "| Type:", typeof isSunday);

// Object
let user = {
    name: 'Pratik',
    company: 'Impetus',
    language: 'English'
};
console.log("6️⃣ Object:", user, "| Type:", typeof user);

// Array
let array1 = [1, 2, 3, 4];
console.log("7️⃣ Array:", array1, "| Type:", typeof array1);

// Null
let phone = null;
console.log("8️⃣ Null:", phone, "| Type:", typeof phone, "(JS bug)");

// Undefined
let mobile;
console.log("9️⃣ Undefined:", mobile, "| Type:", typeof mobile);

// BigInt
let int1 = 23835435983457345343454n; // 'n' suffix denotes BigInt
console.log("🔟 BigInt:", int1, "| Type:", typeof int1);

// Debugger statement (pauses execution in dev tools)
debugger;

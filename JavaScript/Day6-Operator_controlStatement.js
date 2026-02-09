// ==================================================
// Comparison & Logical Operators in JavaScript
// ==================================================

// --------------------------------------------------
// Equality Operators
// --------------------------------------------------

// == (Loose Equality) → Compares values after type conversion
// === (Strict Equality) → Compares both value and data type

let num1 = 2;
let num2 = 4;

let equality = num1 == num2;
console.log(equality); // false

// String and number equality
let str1 = '5';
let num3 = 7;

console.log(str1 == num3);  // false (type conversion allowed)
console.log(str1 === num3); // false (type + value must match)

// --------------------------------------------------
// Type Coercion Examples
// --------------------------------------------------

// Type Coercion → JavaScript automatically converts one data type into another

// String + number → Results in string concatenation
let sum1 = str1 + num3;
console.log(sum1);           // "57"
console.log(typeof sum1);    // string

// String - number → JavaScript converts string to number
let sum2 = str1 - num3;
console.log(sum2);           // -2
console.log(typeof sum2);    // number

// --------------------------------------------------
// Not Equal Operators
// --------------------------------------------------

// !=  → Checks value inequality (with type conversion)
// !== → Checks value and type inequality

console.log(str1 != num3);   // true
console.log(str1 !== num3);  // true

// --------------------------------------------------
// Relational Operators
// --------------------------------------------------

// >  Greater than
// <  Less than
// >= Greater than or equal to
// <= Less than or equal to

console.log(str1 > num3);  
console.log(str1 < num3);  
console.log(str1 >= num3); 
console.log(str1 <= num3); 

// ==================================================
// Logical Operators
// ==================================================

// && (Logical AND) → True if both conditions are true
// || (Logical OR)  → True if at least one condition is true
// !  (Logical NOT) → Reverses the boolean result

let num5 = 66;
let num6 = 99;

console.log((num5 == num6) && (num5 === num6));  
console.log((num5 != num6) && (num5 >= num6));   
console.log((num5 != num6) && (num5 <= num6));   
console.log((num5 === num6) || (num5 <= num6));  
console.log(!(num5 == num6) || (num5 >= num6));  

// ==================================================
// Conditional Statements
// ==================================================

// if → Executes code if condition is true
// else if → Checks another condition if previous is false
// else → Executes when no condition is true

let age = 45;

if (age >= 18 && age <= 40) {
    console.log("You are welcome, Happy evening");
} else if (age >= 45) {
    console.log("You are too old, Not preferred");
} else {
    console.log("You are below age, not permitted");
}

// ==================================================
// Loops
// ==================================================

// for loop → Used when number of iterations is known

let names = ['Pratik', 'Rajat', 'Sahil', 'Raja'];

for (let i = 0; i <= names.length; i++) {
    console.log(`Chronological order names are ${names[i]}`);
}

// while loop → Executes while condition remains true

let count = 0;
while (count <= 5) {
    console.log('Print Hello');
    count++;
}

// do...while loop → Executes at least once even if condition is false

let i = 10;
do {
    console.log(`Executing do once ${i}`);
} while (i >= 100);

// --------------------------------------------------
// break statement
// --------------------------------------------------

// break → Terminates the loop immediately

for (let i = 0; i <= 10; i++) {
    if (i == 3) {
        break;
    }
    console.log(`Executing for loop ${i} times`);
}

// --------------------------------------------------
// continue statement
// --------------------------------------------------

// continue → Skips current iteration and continues with next

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(`Executing continue statement ${i} times`);
}

// ==================================================
// switch Statement
// ==================================================

// switch → Used to execute different blocks based on value

let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Today is the Monday');
        break;
    case 'Tuesday':
        console.log('Today is the Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is the Wednesday');
        break;
    case 'Thursday':
        console.log('Today is the Thursday');
        break;
    case 'Friday':
        console.log('Today is the Friday');
        break;
    case 'Saturday':
        console.log('Today is the Saturday');
        break;
    case 'Sunday':
        console.log('Today is the Sunday');
        break;
}

// --------------------------------------------------
// Advanced switch (Grouped cases)
// --------------------------------------------------

// Grouped cases → Multiple values execute the same block

let day1 = 'Monday';

switch (day1) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('Today is the weekday');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Today is the weekend');
        break;
}

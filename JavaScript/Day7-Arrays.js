// ==================================================
// Arrays in JavaScript
// ==================================================

// Creating an array → List of elements stored in a single variable
let days = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log("Days Array:", days);

// --------------------------------------------------
// Array length → Returns number of elements in array
// --------------------------------------------------

let fruits = ['Apple', 'mango', 'grapes'];
let fruitLength = fruits.length;
console.log("Number of fruits:", fruitLength);

// --------------------------------------------------
// push() → Adds element at the end of array
// --------------------------------------------------

fruits.push('banana');
console.log("After push('banana') →", fruits);

// --------------------------------------------------
// unshift() → Adds element at the start of array
// --------------------------------------------------

fruits.unshift('kiwi');
console.log("After unshift('kiwi') →", fruits);

// --------------------------------------------------
// pop() → Removes element from the end of array
// --------------------------------------------------

fruits.pop();
console.log("After pop() →", fruits);

// --------------------------------------------------
// shift() → Removes element from the start of array
// --------------------------------------------------

fruits.shift();
console.log("After shift() →", fruits);

// --------------------------------------------------
// splice() → Remove elements from a specific index
// splice(startIndex, deleteCount)
// --------------------------------------------------

fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log("After splice(1, 2) →", fruits);

// --------------------------------------------------
// concat() → Joins arrays or values to create a new array
// --------------------------------------------------

let concatFruits = fruits.concat(
    'pineapple',
    'coconut',
    'watermelon',
    'cherry',
    'cranberry'
);
console.log("After concat →", concatFruits);

// --------------------------------------------------
// slice() → Extracts portion of array (startIndex, InclusiveEndIndex)
// --------------------------------------------------

let sliceFruits = concatFruits.slice(2,5);
console.log("After slice(2, 5) →", sliceFruits);

// --------------------------------------------------
// join() → Converts array into string, with optional separator
// --------------------------------------------------

let joinFruits = concatFruits.join('-');
console.log("After join('-') →", joinFruits, "| Type:", typeof joinFruits);

// --------------------------------------------------
// sort() → Sorts array elements (alphabetical for strings)
// --------------------------------------------------

let sortArray = concatFruits.sort();
console.log("After sort() →", sortArray);

// sort() for numbers → Needs a compare function (a - b for ascending)
let sortArray1 = concatFruits.sort(function (a, b) {
    return a - b;
});
console.log("After numeric sort() →", sortArray1); // works only with numbers

// --------------------------------------------------
// reverse() → Reverses array elements
// --------------------------------------------------

let reversedFruits = concatFruits.reverse();
console.log("After reverse() →", reversedFruits);

// --------------------------------------------------
// Multi-dimensional array → Array of arrays
// --------------------------------------------------

let c1 = [1, 2, 3];
let c2 = [4, 5, 6];
let c3 = [7, 8, 9];

let merge = [c1, c2, c3];
console.log("Multi-dimensional array →", merge);

// --------------------------------------------------
// Array destructuring (manual) → Extract elements into variables
// --------------------------------------------------

let p1 = merge[0];
let p2 = merge[1];
let p3 = merge[2];

console.log("Destructured arrays →", p1, p2, p3);

// --------------------------------------------------
// Spread syntax → Combine arrays or values easily
// --------------------------------------------------

let list1 = ['A', 'B', 'C'];
let list2 = ['D', 'E', 'F'];

let finalList = [...list1, ...list2];
console.log("After spread →", finalList);

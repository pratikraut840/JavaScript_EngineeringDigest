// ==================================================
// Arrays in JavaScript
// ==================================================

// Creating an array
let days = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(days);

// --------------------------------------------------
// Array length
// --------------------------------------------------

let fruits = ['Apple', 'mango', 'grapes'];
let fruitLength = fruits.length;
console.log(fruitLength);

// --------------------------------------------------
// push() → add element at the end
// --------------------------------------------------

let fruitPush = fruits.push('banana');
console.log(fruits);

// --------------------------------------------------
// unshift() → add element at the start
// --------------------------------------------------

let unshiftFruits = fruits.unshift('kiwi');
console.log(fruits);

// --------------------------------------------------
// pop() → remove element from the end
// --------------------------------------------------

let popFruits = fruits.pop();
console.log(fruits);

// --------------------------------------------------
// shift() → remove element from the start
// --------------------------------------------------

let shiftFruits = fruits.shift();
console.log(fruits);

// --------------------------------------------------
// splice() → remove elements from a specific index
// --------------------------------------------------

let spliceFruits = fruits.splice(1, 2);
console.log(fruits);

// --------------------------------------------------
// concat() → join arrays or values
// --------------------------------------------------

let concatFruits = fruits.concat(
    'pineapple',
    'coconut',
    'watermelon',
    'cherry',
    'cranberry'
);
console.log(concatFruits);

// --------------------------------------------------
// slice() → extract a portion of array
// --------------------------------------------------

let sliceFruits = concatFruits.slice(2, 5);
console.log(sliceFruits);

// --------------------------------------------------
// join() → join array elements into a string
// --------------------------------------------------

let joinFruits = concatFruits.join('-');
console.log(joinFruits);
console.log(typeof joinFruits);

// --------------------------------------------------
// sort() → sort array elements
// --------------------------------------------------

let sortArray = concatFruits.sort();
console.log(sortArray);

// sort() for numbers
let sortArray1 = concatFruits.sort(function (a, b) {
    return a - b;
});
console.log(sortArray1);

// --------------------------------------------------
// reverse() → reverse array elements
// --------------------------------------------------

let reveredFruits = concatFruits.reverse();
console.log(reveredFruits);

// --------------------------------------------------
// Multi-dimensional array
// --------------------------------------------------

let c1 = [1, 2, 3];
let c2 = [4, 5, 6];
let c3 = [7, 8, 9];

let merge = [c1, c2, c3];
console.log(merge);

// --------------------------------------------------
// Array destructuring (manual)
// --------------------------------------------------

let p1 = merge[0];
let p2 = merge[1];
let p3 = merge[2];

console.log(p1);
console.log(p2);
console.log(p3);

// --------------------------------------------------
// Spread syntax
// --------------------------------------------------

let list1 = ['A', 'B', 'C'];
let list2 = ['D', 'E', 'F'];

let finalList = [...list1, ...list2];
console.log(finalList);

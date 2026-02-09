// ==================================================
// Array Callback Methods in JavaScript
// ==================================================

// --------------------------------------------------
// 1. forEach()
// --------------------------------------------------

// forEach → executes a callback function for each element
let list = [1, 2, 3, 4];

function process(value) {
    console.log('forEach process function executed with value: ' + value);
}

// Traditional for-of loop
for (let i of list) {
    process(i);
}

// Traditional for loop
for (let i = 0; i <= list.length - 1; i++) {
    console.log('Executing traditional for loop at index:', i);
}

// Smart way using forEach
list.forEach(process);

// forEach with named function
list.forEach(function hello(value) {
    console.log('say hello via named function: ' + value);
});

// forEach with arrow function
list.forEach((value) => console.log('Arrow function output: ' + value));

// --------------------------------------------------
// 2. map()
// --------------------------------------------------
// map → transforms each element and returns a new array
let list2 = [1, 2, 3, 4, 5];

let newList = list2.map((value) => value * 10);
console.log('map multiplied by 10:', newList);

// --------------------------------------------------
// 3. filter()
// --------------------------------------------------
// filter → returns a new array with elements passing a condition
let list3 = [24, 55, 88, 45666, 74, 66, 2, 11, 33];

function isEven(num) {
    return num % 2 === 0;
}

// Traditional way
let emptyList = [];
for (let i of list3) {
    if (isEven(i)) emptyList.push(i);
}
console.log('Traditional even numbers:', emptyList);

// Smart way using filter
let filteredList = list3.filter(isEven);
console.log('Filtered even numbers:', filteredList);

// --------------------------------------------------
// 4. reduce()
// --------------------------------------------------
// reduce → reduces array to a single value using an accumulator
let list4 = [10, 20, 30, 40, 50];

let finalList4 = list4.reduce((accumulator, current) => {
    return accumulator + current; // Sum all elements
}, 0);
console.log('reduce sum result:', finalList4);

// --------------------------------------------------
// 5. find()
// --------------------------------------------------
// find → returns first element that satisfies the condition
let list5 = [1, 9, 5, 7, 5, 6, 3, 33];

let findList = list5.find((number) => number < 9);
console.log('find first element < 9:', findList);

// --------------------------------------------------
// 6. every()
// --------------------------------------------------
// every → checks if all elements satisfy a condition
let list6 = [224, 66, 8, 34, 458, 844, 50];

let everyList = list6.every((number) => number % 2 === 0);
console.log('every element is even:', everyList);

// --------------------------------------------------
// 7. some()
// --------------------------------------------------
// some → checks if at least one element satisfies a condition
let list7 = [44, 56, 88, 22, 66];

let someList = list7.some((number) => number % 2 !== 0);
console.log('some element is odd:', someList);

// --------------------------------------------------
// 8. sort()
// --------------------------------------------------
// sort → sorts elements in place

let list8 = [1, 23, 45.6, 112.66, 99];

// Default sort → converts elements to strings
let finalSort = list8.sort();
console.log('Default sort:', finalSort);

// ASC numeric sort
let finalSort1 = list8.sort((a, b) => a - b);
console.log('Ascending sort:', finalSort1);

// DESC numeric sort
let finalSort2 = list8.sort((a, b) => b - a);
console.log('Descending sort:', finalSort2);

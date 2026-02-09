// ==================================================
// Callback Functions in JavaScript
// ==================================================

// A callback function is a function passed as an argument
// to another function, to be executed later.

// --------------------------------------------------
// Example: Basic callbacks
// --------------------------------------------------

function processData(Name) {
    console.log('Processing data: ' + Name);
}

function deleteData(Name) {
    console.log('Deleting data: ' + Name);
}

// Higher-order function that accepts a callback
function output(funcName, value) {
    funcName(value); // Execute the callback
}

// Function call with callback
output(deleteData, 'PRATIK'); 
// Output: Deleting data: PRATIK

// ==================================================
// Array Callback Methods
// ==================================================

let list1 = [55, 44, 33, 66, 77, 22, 11];

// forEach → executes a function for each array element
list1.forEach((element) => {
    console.log('forEach element:', element);
});

// map → transforms each element into a new array
let divisibleBy22 = list1.map((element) => {
    return element % 22 === 0 ? element : null;
}).filter((e) => e !== null); // remove nulls
console.log('map divisible by 22:', divisibleBy22);

// filter → creates a new array with elements that pass a test
let evenNumbers = list1.filter((element) => element % 2 === 0);
console.log('filter even numbers:', evenNumbers);

// reduce → reduces array to a single value using a callback
let list3 = [3, 4, 4, 7, 8, 2];
let reducedValue = list3.reduce((accumulator, current) => {
    return accumulator + current * 10; // accumulate sum
}, 0);
console.log('reduce result:', reducedValue);

// find → returns the first element that matches the condition
let findThree = list3.find((element) => element === 3);
console.log('find element 3:', findThree);

// every → checks if all elements satisfy a condition
let allAre3 = list3.every((element) => element === 3);
console.log('every element === 3:', allAre3);

// some → checks if at least one element satisfies a condition
let someAre3 = list3.some((element) => element === 3);
console.log('some element === 3:', someAre3);

// sort → sorts array elements (descending order)
let sortedList = list3.sort((a, b) => b - a);
console.log('sorted list descending:', sortedList);

// ==================================================
// Nested callbacks (Callback Hell Example)
// ==================================================

// Simulate asynchronous user fetching
function getUsers(id, getNextUser) {
    console.log('Loading user with id:', id);
    setTimeout(() => {
        console.log('User loaded:', id);
        if (getNextUser) getNextUser();
    }, 2000);
}

// Nested callbacks → “callback hell”
getUsers(1, () => {
    getUsers(2, () => {
        getUsers(3, () => {
            console.log('All users loaded');
        });
    });
});

// ==================================================
// Promises
// ==================================================

// A Promise represents an asynchronous operation
// that can either resolve (success) or reject (failure)

let promObj = new Promise((resolve, reject) => {
    resolve('Promise resolved');
    // reject('Promise rejected'); // won't run after resolve
});

promObj.then((message) => {
    console.log('Promise then:', message);
}).catch((err) => {
    console.log('Promise catch:', err);
});

// Async function with promise
function getDevices(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting device with id:', id);
            resolve('Device loaded: ' + id);
        }, 2000);
    });
}

// Calling promise-based function
getDevices(1).then((message) => {
    console.log(message);
});

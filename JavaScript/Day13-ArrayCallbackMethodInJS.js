// ==================================================
// Array Callback Methods in JavaScript
// ==================================================

// --------------------------------------------------
// 1. forEach()
// --------------------------------------------------

let list = [1, 2, 3, 4];

function process(value) {
    console.log('This process function is executed ' + value);
}

// Traditional way
for (let i of list) {
    process(i);
}

// Traditional way
for (let i = 0; i <= list.length - 1; i++) {
    console.log('Executing for loop');
}

// Smart way using forEach
list.forEach(process);

// forEach with named function
list.forEach(function hello(value) {
    console.log('say hello ' + value);
});

// forEach with arrow function (single line)
list.forEach((value) => console.log('this is arrow function ' + value));

// --------------------------------------------------
// 2. map()
// Case: multiply all elements by 10 and return new list
// --------------------------------------------------

let list2 = [1, 2, 3, 4, 5];

let newList = list2.map((value) => {
    return value * 10;
});

console.log(newList);

// --------------------------------------------------
// 3. filter()
// --------------------------------------------------

let list3 = [24, 55, 88, 45666, 74, 66, 2, 11, 33];

function isEven(num) {
    return num % 2 == 0;
}

// Traditional way
let emptyList = [];
for (let i of list3) {
    if (isEven(i)) {
        emptyList.push(i);
    }
}

console.log(`filter list is ${emptyList}`);

// Smart way using filter
let filteredList = list3.filter(isEven);
console.log(filteredList);

// --------------------------------------------------
// 4. reduce()
// --------------------------------------------------

let list4 = [10, 20, 30, 40, 50];

let finalList4 = list4.reduce((accumulator, current) => {
    return accumulator * current | 10;
});

console.log(finalList4);

// --------------------------------------------------
// 5. find()
// --------------------------------------------------

let list5 = [1, 9, 5, 7, 5, 6, 3, 33];

let findList = list5.find((number) => {
    return number < 9;
});

console.log(findList);

// --------------------------------------------------
// 6. every()
// --------------------------------------------------

let list6 = [224, 66, 8, 34, 458, 844, 50];

let everyList = list6.every((number) => {
    return number % 2 == 0;
});

console.log(everyList);

// --------------------------------------------------
// 7. some()
// --------------------------------------------------

let list7 = [44, 56, 88, 22, 66];

let someList = list7.some((number) => {
    return number % 2 !== 0;
});

console.log(someList);

// --------------------------------------------------
// 8. sort()
// --------------------------------------------------

let list8 = [1, 23, 45.6, 112.66, 99];

// Default sort
let finalSort = list8.sort();
console.log(finalSort);

// ASC order sort
let finalSort1 = list8.sort((a, b) => {
    return a - b;
});
console.log(finalSort1);

// DESC order sort
let finalSort2 = list8.sort((a, b) => {
    return b - a;
});
console.log(finalSort2);

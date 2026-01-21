// ==================================================
// Functions in JavaScript
// ==================================================

// --------------------------------------------------
// 1. Non-parameterized function
// --------------------------------------------------

function addition() {
    console.log("This is non parameterized function");
}

addition();

// --------------------------------------------------
// 2. Parameterized function without return keyword
// --------------------------------------------------

function add(a, b) {
    let sum = a + b;
    console.log(sum);
}

add(4, 8);
// let addFunction = add(22, 33);
// This fails because the function does not return anything

// --------------------------------------------------
// 3. Parameterized function with return keyword
// --------------------------------------------------

function sub(a, b, c) {
    return a - b + c;
}

let subtract = sub(8, 5, 5);
console.log(subtract);

// --------------------------------------------------
// 4. Arrow Function
// --------------------------------------------------

let multiply = (a, b) => {
    return a * b;
};

let mul = multiply(7, 7);
console.log(mul);

// --------------------------------------------------
// 5. Default value of function argument
// --------------------------------------------------

let division5 = (value = 100) => {
    return value / 5;
};

let device = division5(50);
console.log(device);

// --------------------------------------------------
// 6. Higher Order Functions
// --------------------------------------------------

// HigherOrderFunction 1:
// Takes function as argument (Callback Function)

function add1(a, b) {
    return a + b;
}

function higherOrder(add, a, b) {
    return add(a, b);
}

console.log(higherOrder(add1, 6, 7));

// HigherOrderFunction 2:
// Takes function as argument and returns a function

function sub1(a, b) {
    return a - b;
}

function higherOrder2() {
    return function (a, b) {
        return sub1(a, b); // static way
    };
}

console.log(higherOrder2()(10, 8));

// Dynamic higher-order function
function higherOrder3(fn) {
    return function (a, b) {
        return fn(a, b); // dynamic way
    };
}

console.log(higherOrder3(sub)(10, 8));

// Higher order function example 2

let additionOfTwoNum = (a, b) => a + b;

function higherOrderFun(fun) {
    fun();
}

higherOrderFun(() => {
    console.log("higherOrderFun2 :" + (additionOfTwoNum, 6, 8));
});

// --------------------------------------------------
// 7. Spread / Rest Operator
// --------------------------------------------------

// Rest operator example
function sumAddi(...nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    return sum;
}

console.log(sumAddi(10, 20, 30));

// Spread operator example
let list1 = [1, 2, 3];
let list2 = [4, 5, 6];

// Direct array nesting
let list3 = [list1, list2];
console.log(list3);

// Spread operator flattens the arrays
let list4 = [...list1, ...list2];
console.log(list4);

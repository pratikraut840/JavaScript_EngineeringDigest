// ==================================================
// Functions in JavaScript
// ==================================================

// --------------------------------------------------
// 1. Non-parameterized function
// --------------------------------------------------

function addition() {
    console.log("1️⃣ Non-parameterized Function: No arguments, no return");
}

addition();

// --------------------------------------------------
// 2. Parameterized function without return keyword
// --------------------------------------------------

function add(a, b) {
    let sum = a + b;
    console.log(`2️⃣ add(${a}, ${b}) → Sum = ${sum}`);
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
console.log(`3️⃣ sub(8, 5, 5) → Result = ${subtract}`);

// --------------------------------------------------
// 4. Arrow Function
// --------------------------------------------------

let multiply = (a, b) => {
    return a * b;
};

let mul = multiply(7, 7);
console.log(`4️⃣ Arrow Function multiply(7, 7) → Result = ${mul}`);

// --------------------------------------------------
// 5. Default value of function argument
// --------------------------------------------------

let division5 = (value = 100) => {
    return value / 5;
};

let device = division5(50);
console.log(`5️⃣ Default Parameter division5(50) → Result = ${device}`);

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

console.log(`6️⃣ HOF (Callback) higherOrder(add1, 6, 7) → Result = ${higherOrder(add1, 6, 7)}`);

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

console.log(`7️⃣ HOF (Function Returning Function) higherOrder2()(10, 8) → Result = ${higherOrder2()(10, 8)}`);

// Dynamic higher-order function
function higherOrder3(fn) {
    return function (a, b) {
        return fn(a, b); // dynamic way
    };
}

console.log(`8️⃣ Dynamic HOF higherOrder3(sub)(10, 8) → Result = ${higherOrder3(sub)(10, 8)}`);

// Higher order function example 2

let additionOfTwoNum = (a, b) => a + b;

function higherOrderFun(fun) {
    fun();
}

higherOrderFun(() => {
    console.log(`9️⃣ HOF Callback Execution → Result = ${additionOfTwoNum(6, 8)}`);
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

console.log(`🔟 Rest Operator sumAddi(10, 20, 30) → Sum = ${sumAddi(10, 20, 30)}`);

// Spread operator example
let list1 = [1, 2, 3];
let list2 = [4, 5, 6];

// Direct array nesting
let list3 = [list1, list2];
console.log("1️⃣1️⃣ Nested Array (Without Spread):", list3);

// Spread operator flattens the arrays
let list4 = [...list1, ...list2];
console.log("1️⃣2️⃣ Spread Operator Result:", list4);

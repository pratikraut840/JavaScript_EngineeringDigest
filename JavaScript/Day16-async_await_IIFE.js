// ==================================================
// Async / Await Example
// ==================================================

// async and await are keywords in JavaScript
// Async functions always return a Promise
// await pauses execution until the Promise is settled
// await can only be used inside an async function

// --------------------------------------------------
// Promise-based function
// --------------------------------------------------

//normal function
// function getAccountBalance(accountId) {
//     return new Promise((resolve, reject) => {
//         // 2 seconds delay
//         setTimeout(() => {
//             console.log('getting balance... ' + accountId);
//             resolve('promise resolve for getAccountBalance()');
//             // reject('promise reject for getAccountBalance()');
//         }, 2000);
//     });
// }

//arrow function
const getAccountBalance = (accountId) =>{
    return new Promise((resolve, reject) => {
        // 2 seconds delay
        setTimeout(() => {
            console.log('getting balance... ' + accountId);
            resolve('promise resolve for getAccountBalance()');
            // reject('promise reject for getAccountBalance()');
        }, 2000);
    });
}

// --------------------------------------------------
// Async function example (Sequential execution)
// --------------------------------------------------

async function asyncBalance() {
    // await can only be used inside an async function
    console.log('calling getAccountBalance NormalWay');
    await getAccountBalance(1); // 1st
    await getAccountBalance(2); // 2nd
    await getAccountBalance(3); // 3rd
}

// Calling async function
asyncBalance();

// --------------------------------------------------
// Event loop: The event loop is a mechanism that allows JavaScript to handle asynchronous operations without blocking the main thread.
// --------------------------------------------------

// ┌──────────────┐
// │  Call Stack  │
// └───────┬──────┘
//         │ empty?
//         ▼
// ┌──────────────┐
// │ Microtasks   │ ← Promises (run ALL)
// └───────┬──────┘
//         │ empty?
//         ▼
// ┌──────────────┐
// │ Macrotasks   │ ← setTimeout (run ONE)
// └───────┬──────┘
//         └── repeat forever

// --------------------------------------------------
// synchronous Vs Asynchronous Code Execution
// --------------------------------------------------

//without await
// Time →
// ──────────────────────────────────>
// demo():  A ─────────────── done
// main():         C
// microtask: ────────── B



//with await
// Time →
// ──────────────────────────────────>
// demo():  A ────── pause ────── B
// main():             C

// ==================================================
// IIFE (Immediately Invoked Function Expression)
// ==================================================
// An IIFE runs immediately after it is defined

// Standard IIFE
(function () {
    // statements…
})();

// Arrow function IIFE
(() => {
    // statements…
})();

// Async IIFE
(async () => {
    // statements…
})();

// --------------------------------------------------
// Calling getAccountBalance using async IIFE
// --------------------------------------------------

(async function () {
    // await can only be used inside the async function
    console.log('calling getAccountBalance by IIFE');
    await getAccountBalance(1); // 1st
    await getAccountBalance(2); // 2nd
    await getAccountBalance(3); // 3rd
})();

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


// --------------------------------------------------
// Promise-based function
// --------------------------------------------------

// Arrow function that returns a promise simulating async operation
const getAccountBalance = (accountId) => {
    return new Promise((resolve, reject) => {
        // 2 seconds delay to simulate async fetch
        setTimeout(() => {
            console.log(`✅ Fetched balance for account ${accountId}`);
            resolve(`Balance fetched for account ${accountId}`);
            // reject(`Error fetching account ${accountId}`); // Uncomment to test error handling
        }, 2000);
    });
};

// --------------------------------------------------
// Async function example (Sequential execution)
// --------------------------------------------------

async function asyncBalance() {
    console.log('🔹 Sequential async execution started');
    await getAccountBalance(1); // pauses until resolved
    await getAccountBalance(2); // next waits for previous
    await getAccountBalance(3); // last
    console.log('🔹 Sequential async execution finished');
}

// Calling async function
asyncBalance();

// --------------------------------------------------
// How JS handles async tasks??
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
    console.log('🔹 Standard IIFE executed');
})();

// Arrow function IIFE
(() => {
    console.log('🔹 Arrow IIFE executed');
})();

// Async IIFE
(async () => {
    console.log('🔹 Async IIFE executed');
})();

// --------------------------------------------------
// Calling getAccountBalance using async IIFE
// --------------------------------------------------

(async function () {
    console.log('🔹 Sequential async IIFE started');
    await getAccountBalance(1); // 1st
    await getAccountBalance(2); // 2nd
    await getAccountBalance(3); // 3rd
    console.log('🔹 Sequential async IIFE finished');
})();

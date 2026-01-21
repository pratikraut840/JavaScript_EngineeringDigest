// ==================================================
// Async / Await Example
// ==================================================

// async and await are keywords in JavaScript
// Async functions always return a Promise
// await pauses execution until the Promise is settled
// await can only be used inside an async function

function getAccountBalance(accountId) {
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
// Async function example
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

// ==================================================
// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that runs as soon as it is defined
// ==================================================

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

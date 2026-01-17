//async and await are keywords in javascript
// Async function always return a promise
// await pauses the execution of its surrounding async function until the promise is settled
// await can only be used inside the async function

function api(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting data... ' + id);
            resolve('Promise resolved')
        }, 2000)
    });
}

// Async function always return a promise
async function getApiData() {
    // await can only be used inside the async function
    console.log('calling getApiData NormalWay')
    await api(1);//1st
    await api(2);//2nd
    await api(3);//3rd
}
getApiData();

//IIFE: Immediately Invoked Function Expression
// An IIFE is JavaScript function that runs as soon as it is defined
// standard IIFE
(function () {
    // statements…
})();

// arrow function variant
(() => {
    // statements…
})();

// async IIFE
(async () => {
    // statements…
})();

//calling getApiData NormalWay
(async function () {
    // await can only be used inside the async function
    console.log('calling getApiData by IIFE')
    await api(1);//1st
    await api(2);//2nd
    await api(3);//3rd
})()

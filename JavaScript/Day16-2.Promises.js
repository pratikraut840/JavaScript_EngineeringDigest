// =======================
// Promises Example
// =======================

// Creating a Promise object
let promiseObj = new Promise((resolve, reject) => {
    resolve(console.log('Promise resolved for promiseObj'));
    // reject(console.log('Promise failed'))
});

// Function returning a Promise (simulating async operation)
function getDevices(deviceId, getNextDevice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting device id is ' + deviceId);
            resolve(console.log('Promise resolved for getDevices() method'));

            if (getNextDevice) {
                getNextDevice();
            }
        }, 2000);
    });
}

// Calling the function
getDevices(1);

// ==============================================================
// Promise returning function
// ==============================================================

const getPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('Promise got resolved | resolved msg');
        reject('Promise got rejected | reject msg');
    });
};

// Handling promise success or failure
// Storing getPromise result in a variable
let getPromiseStatus = getPromise();

// then() handles fulfilled promise
getPromiseStatus.then((res) => {
    console.log('then run > Promised fulfilled', res);
    // res contains the resolved message from getPromise
});

// catch() handles rejected promise
getPromiseStatus.catch((err) => {
    console.log('catch run > Promised failed', err);
    // err contains the rejected message from getPromise
});

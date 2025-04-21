//Promises
let promiseObj = new Promise((resolve, reject) => {
    resolve(console.log('Promise resolved'));
    // reject(console.log('Promise failed'))
})


function getDevices(deviceId, getNextDevice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting device id is ' + deviceId);
            resolve(console.log('Promise resolved'));
            if (getNextDevice) {
                getNextDevice()
            }
        }, 2000);
    });
}
getDevices(1)

// ==============================================================
//Promise
const getPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('Promise got resolved');
        reject('Promise got rejected');
    })
}

//promises handling if success or fail
//storing getPromise in object
let getPromiseStatus = getPromise();

//then is used to handle when promise is fulfilled
getPromiseStatus.then((res) => {
    console.log('Promised fulfilled', res) //res (result) word is used to print result msg

})

//catch is used to handle when promise is failed
getPromiseStatus.catch((err) => {
    console.log('Promised failed', err) //err (error) word is used to print resolve msg
})


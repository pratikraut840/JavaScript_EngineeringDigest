//callback hell
function getDevices(id, getNextDevice) {
    //2sec
    setTimeout(() => {
        console.log('getting devices...' + id)
        if (getNextDevice) {
            getNextDevice();
        }

    }, 2000)
}
//callback hell
getDevices(1, () => {
    getDevices(2, () => {
        getDevices(3, () => {
            getDevices(4);
        })
    });
});

//promises
function getWeatherStatus() {
    return new Promise((resolve, reject) => {
        resolve('promise resolved');
        reject('Promise reject');
    })
}

let myPromise = getWeatherStatus();

myPromise.then((res) => {
    console.log(res)
});
myPromise.catch((err) => {
    console.log(err)
})
// ==========================================================
// promisee chain
function getOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting order id..', orderId);
            resolve('Promised resolved for getOrderStatus()');
        }, 2000)
    })
}

getOrderStatus(1).then((res) => {
    console.log(res);
    getOrderStatus(2).then(() => {
        getOrderStatus(3).then(() => {
            getOrderStatus(4);
        });
    });
})
// ===============================================

//async await
function getAccountBalance(accountId) {
    return new Promise((resolve, reject) => {
        //3sec
        setTimeout(() => {
            console.log('getting balance...' + accountId);
            resolve('promise resolve for getAccountBalance()');
            // reject('promise reject for getAccountBalance()');
        }, 3000)
    })
};

async function asyncBalance() {
    await getAccountBalance(1);
    await getAccountBalance(2);
    await getAccountBalance(3);
    await getAccountBalance(4);
    await getAccountBalance(5);
}

asyncBalance(); //call async function
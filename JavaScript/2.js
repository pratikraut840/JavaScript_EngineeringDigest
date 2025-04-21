//promise
let promiseObj = new Promise((resolve, reject) => {
    console.log('I am promise');
    resolve('Promise resolved');
    reject('Promise Reject');
})

// ========================================


function getMouses(id, getNextMouse) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('promise resolved');
            reject('promise reject');
            console.log('getting mouse...' + id);
            if (getNextMouse) {
                getNextMouse()
            }
        }, 2000)
    })
}

let promise = getMouses();

promise.then((res) => {
    console.log('promise handled', res) //result
})

promise.catch((err) => {
    console.log('promise rejected', err) //eror
})
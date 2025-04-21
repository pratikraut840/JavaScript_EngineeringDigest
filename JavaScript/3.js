//promise chaining
function getData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('getting data1 for...' + id)
            resolve('promise resolved');
            reject('promise reject')
        }, 3000)
    })
}

function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('getting data2 for...' + id)
            resolve('promise resolved');
            reject('promise reject')
        }, 3000)
    })
}

function getData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('getting data3 for...' + id)
            resolve('promise resolved');
            reject('promise reject')
        }, 3000)
    })
}

let promiseObj1 = getData1();
let promiseObj2 = getData2();
let promiseObj3 = getData3();

console.log('getting data1...');
promiseObj1.then(() => {
    console.log('getting data2...');
    promiseObj1.then(() => {
        console.log('getting data3...');
        promiseObj1.then(() => {
        })
    })
})

//promise chaining
function getPcs(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting PC for id ' + id);
            resolve('promise resolved');
        }, 4000)
    })
}

console.log('getting PC for id1');
getPcs(1).then((res) => {
    console.log('getting PC for id2');
    return getPcs(2);
}).then((res) => {
    console.log('getting PC for id3');
    return getPcs(3)
}).then((res) => {
    console.log('getting PC for id4');
    return getPcs(4)
})

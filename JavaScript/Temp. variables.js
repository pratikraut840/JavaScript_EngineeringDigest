let num = "1123.8000001 test";
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(parseFloat(num).toFixed(3));
console.log(parseInt(num).toString());

function greet(name = "Name is missing") {
    console.log(name);
}

greet('Raj');

function entertainUser(fn) {
    fn();
}
entertainUser(greet)

// callback function?
function getDevices(id, getNextDevice) {
    console.log('getting device..')
    setTimeout(() => {
        console.log('getting device for id ', id)
        if (getNextDevice) {
            getNextDevice();
        }
    }, 2000)
}

//callback hell
getDevices(3, () => {
    getDevices(4, () => {
        getDevices(5, () => {
            getDevices(6);
        })
    })
});

//promises object creation
let promiseObj = new Promise((resolve, reject) => {
    resolve('promise is resolved');
    // reject('promise is reject');
});

promiseObj.then((res) => {
    console.log('Promises is handled and executed successfully' + res);
});
promiseObj.catch((err) => {
    console.log('Promises is handled and executed successfully' + err);
});

//function
let getData = (id) => {
    return new Promise((resolve, reject) => {
        {
            setTimeout(() => {
                console.log('getting data for id..' + id)
                resolve('promise resolved');
                reject('promise rejected')
            }, 2000);
        }
    })

}

// promise chaning
getData(1).then(() => {
    getData(2).then(() => {
        getData(3).then(() => {
            getData(4);
        })
    })
})

//normal function
function getEmployee(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting employee for id..' + id)
            resolve('promise resolved');
        }, 2000)
    })
}

//advance arrow function
let getEmployeeData2 = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting employee id for ' + id);
            resolve('resolved promise');
        }, 2000)
    });
}

async function getEmployeeData() {
    await getEmployeeData2(1);
    await getEmployeeData2(2);
    await getEmployeeData2(3);
    await getEmployeeData2(4);
}
getEmployeeData();

//
console.log("Start");

function syncTask() {
  for (let i = 0; i < 1e9; i++) {} // heavy work
}

syncTask();

console.log("End");

//
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

test();
console.log("C");

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






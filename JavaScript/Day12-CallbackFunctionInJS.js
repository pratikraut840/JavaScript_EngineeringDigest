//callback function in js

//fun1
function processData(Name) {
    console.log('Processing data...' + Name)
}

//fun2
function deleteData(Name) {
    console.log('Deleting data...' + Name)
}

//callback function
function output(funcName, value) {
    funcName(value)
}

output(deleteData, 'PRATIK');

// =======================================================

let list1 = [55, 44, 33, 66, 77, 22, 11];
list1.forEach((element) => {
    console.log('All array elements are ' + element)
})

let emptyList = [];
let mapList = list1.map((element) => {
    if (element % 22 == 0) {
        emptyList.push(element);
    }
    return emptyList;
})
console.log(emptyList);

let emptyList2 = []
let filterFun = list1.filter((element) => {
    if (element % 2 == 0) {
        emptyList2.push(element)
    }
    return emptyList2
})

console.log(emptyList2);

let list3 = [3, 4, 4, 7, 8, 2]
let reducedValue = list3.reduce((accumulator, current) => {
    return accumulator + current * 10 | 0;
})
console.log(reducedValue)

let find = list3.find((element) => { return element == 3 });
console.log(find);

let every = list3.every((element) => {
    if (element === 3) {
        return element;
    }
})
console.log(every);

let some = list3.some((element) => {
    if (element == 3) {
        return element;
    };
})
console.log(some);

let sort = list3.sort((a, b) => {
    return b - a;
})
console.log(sort);

//nested callback fun
function getUsers(id, getNextUser) {
    console.log('loading user...')
    setTimeout(() => {
        if (getNextUser) {
            getNextUser();
        }
    }, 2000)
}
// callback hell
getUsers(1, () => {
    console.log('getting user 1...')
    getUsers(2, () => {
        console.log('getting user 2...')
        getUsers(3, () => {
            console.log('loading user 3')
        })
    })
});


let promObj = new Promise((resolve, reject) => {
    resolve(console.log('resolve'));
    reject(console.log('reject'));
});

function getDevices(id, nextDevice) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting devices')
            resolve(console.log('promise resolved'));
            if (nextDevice) {
                nextDevice();
            }
        }, 2000)
    })
}
getDevices(1, () => {
    console.log('getting device1...')
})






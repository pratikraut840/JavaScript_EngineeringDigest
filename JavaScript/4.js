//callback hell
function getAllData(id, getNextData) {
    setTimeout(() => {
        console.log('getting data...' + id);
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}

getAllData(2, () => {
    getAllData(3, () => {
        getAllData(4)
    })
})

//promises
function getAllPens(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting pen for id..' + id);
            resolve('promise resolved')
        }, 2000)
    });
}

let promiseObj1 = getAllPens();

//promise chaining
promiseObj1.then(() => {
    return getAllPens(1);
}).then(() => {
    return getAllPens(2);
}).then(() => {
    return getAllPens(3);
}).then(() => {
    return getAllPens(4);
})


//async await
function getMouses(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting mouse for...' + id);
            resolve('promise resolved')
        }, 3000)
    })

}

async function getAllMouses() {
    await getMouses(1);
    await getMouses(2);
    await getMouses(3);
    await getMouses(4);
    await getMouses(5);
}

getAllMouses();
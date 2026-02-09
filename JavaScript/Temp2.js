// callbackhell
function getData(id, nextData) {
    //2s
    setTimeout(() => {
        if (nextData) {
            nextData()
        }
        console.log('getting data for id ' + id)
    }, 2000)
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        })
    })
})

//promises
function getDevices(id) {
    return new Promise((resolve, reject) => {

        //2s
        setTimeout(() => {
            console.log('getting data for device ' + id);
            resolve('promise resolved');
            reject('promise rejected');
        }, 2000)
    });
}

getDevices(1).then(() => {
    getDevices(2).then(() => {
        getDevices(3).then(() => {
            getDevices(4);
        })
    })
})

//aysnc function
function getLogics(id) {
    return new Promise((resolve, reject) => {
        //2sec
        setTimeout(() => {
            resolve('promise resolved by async');
            reject('promise rejected by async');
            console.log('getting logic for problem ' + id)
        },2000)
    })
}

async function masterLogic() {
    await getLogics(1);
    await getLogics(2);
    await getLogics(3);
    await getLogics(4);
    await getLogics(5);
}

masterLogic();
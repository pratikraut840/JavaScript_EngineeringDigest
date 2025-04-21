//promise chain
const getData = (dataId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting data for ' + dataId)
            resolve('success');
            reject('failed')
        }, 3000)
    });
}

// traditional way to handle promises chain
getData(1).then((res) => {
    console.log('getting data for id 2', res);
    getData(2).then((res) => {
        console.log('getting data for id 2', res);
        getData(3).then((res) => {
            console.log('getting data for id 3', res)
        })
    })

})

//smart way to handle promises chain
getData(1).then((res) => {
    return getData(2)
}).then((res) => {
    return getData(3)
}).then((res) => {
    return getData(4);
})
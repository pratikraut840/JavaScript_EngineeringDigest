// ==================================================
// Promise Chaining Example
// Promise chaining is a cleaner way to handle async operations compared to nested callbacks
// ==================================================
//normal function
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("getting data for " + dataId);
//             resolve("success");
//             reject("failed");
//         }, 3000);
//     });
// };

//advanced arrow function
let getData = (dataId)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting data for " + dataId);
            resolve("success");
            reject("failed");
        }, 3000);
    });
};

// --------------------------------------------------
// Traditional way to handle promise chaining
// (nested then calls — similar to callback hell)
// --------------------------------------------------

getData(1).then((res) => {
    console.log("getting data for id 2", res);
    getData(2).then((res) => {
        console.log("getting data for id 2", res);
        getData(3).then((res) => {
            console.log("getting data for id 3", res);
        });
    });
});

// --------------------------------------------------
// Smart way to handle promise chaining
// (returning promises for cleaner flow)
// --------------------------------------------------

getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        return getData(4);
    });

// // //callback hell
// // let getData = (id, getNextData)=>{
// //     //2s
// //     setTimeout(()=>{
// //         console.log('getting data for id '+id);
// //         if(getNextData){
// //             getNextData();
// //         }
// //     },2000)
// // }

// // getData(1,()=>{
// //     getData(2,()=>{
// //         getData(3,()=>{
// //             getData(4)
// //         })
// //     })
// // });

// //promise
// getLocation = (id) =>{
//     return new Promise((resolve,reject)=>{
//     //2
//     setTimeout(()=>{
//         console.log('getting location for id '+id);
//         resolve('location promise resolved');
//     },2000)
//     })

// }

// let locationPromise = getLocation(1);

// locationPromise.then(()=>{
//     console.log('location handled with then');
// })

// locationPromise.catch(()=>{
//     console.log('location handled with catch');
// })

// // getLocation(1);

// // promise chaining
// getLocation(1).then(()=>{
//     getLocation(2).then(()=>{
//         getLocation(3).then(()=>{
//             getLocation(4)
//         })
//     })
// })

//async fun
function getLogic(id) {
    return new Promise((resolve,reject) => {
        //2s
        setTimeout(() => {
            console.log('getting logic for id ' + id);
            resolve('promise resolved')
        }, 2000)
    })

}

async function masterLogic() {
    await getLogic(1);
    await getLogic(2);
    await getLogic(3);
    await getLogic(4);
}

masterLogic();


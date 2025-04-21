//callback hell

//function = to get data in every 2 seconds
function getData(id, getNextData) {
    //2s
    setTimeout(() => {
        console.log('getting data of ID ' + id)
        if (getNextData) {
            getNextData();
        }
    }, 2000);

}
//usecase: Calling getData function nestedly or sequencially one after one
//nested callback hell function
getData(1, () => {
    console.log('getting data...')
    getData(2, () => {
        console.log('getting data...');
        getData(3, () => {
            console.log('getting data...');
            getData(4, () => {
                console.log('getting data...');
                getData(5)
            })
        });
    })
})






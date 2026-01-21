// Callback Hell Example
// Function to get data every 2 seconds
function getData(id, getNextData) {
    // 2 seconds delay
    setTimeout(() => {
        console.log('getting data of ID ' + id);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// Use case: Calling getData function sequentially (nested callbacks)
// Demonstrates callback hell
getData(1, () => {
    console.log('getting data...');
    getData(2, () => {
        console.log('getting data...');
        getData(3, () => {
            console.log('getting data...');
            getData(4, () => {
                console.log('getting data...');
                getData(5);
            });
        });
    });
});

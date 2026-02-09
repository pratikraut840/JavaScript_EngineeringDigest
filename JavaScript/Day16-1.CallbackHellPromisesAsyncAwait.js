// ==================================================
// Callback Hell Example in JavaScript
// ==================================================

// Function to simulate fetching data with 2-second delay
function getData(id, getNextData) {
    setTimeout(() => {
        console.log(`✅ Fetched data for ID: ${id}`);
        // Call next callback if provided
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

// Sequentially calling getData (nested callbacks)
console.log('Starting Callback Hell demo...\n');

getData(1, () => {
    console.log('Processing next data...');
    getData(2, () => {
        console.log('Processing next data...');
        getData(3, () => {
            console.log('Processing next data...');
            getData(4, () => {
                console.log('Processing next data...');
                getData(5, () => {
                    console.log('All data fetched successfully ✅');
                });
            });
        });
    });
});

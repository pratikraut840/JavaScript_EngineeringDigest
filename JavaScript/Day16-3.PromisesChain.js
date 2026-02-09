// ==================================================
// Promise Chaining Example
// Promise chaining is a cleaner way to handle async operations
// compared to deeply nested callbacks (callback hell)
// ==================================================

// Function to simulate async data fetching
let getData = (dataId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`✅ Fetched data for ID ${dataId}`);
            resolve(`Data ${dataId} success`);
            // reject(`Data ${dataId} failed`); // Uncomment to test error handling
        }, 2000);
    });
};

// ==================================================
// 1️⃣ Nested then calls (still messy — like callback hell)
// ==================================================
getData(1).then((res) => {
    console.log("Nested then result:", res);
    getData(2).then((res) => {
        console.log("Nested then result:", res);
        getData(3).then((res) => {
            console.log("Nested then result:", res);
        });
    });
});

// ==================================================
// 2️⃣ Clean Promise chaining (flat, readable)
// ==================================================
getData(1)
    .then((res) => {
        console.log("Chained result:", res);
        return getData(2); // return the next promise
    })
    .then((res) => {
        console.log("Chained result:", res);
        return getData(3); // return the next promise
    })
    .then((res) => {
        console.log("Chained result:", res);
        return getData(4);
    })
    .then((res) => {
        console.log("Chained result:", res);
        console.log("✅ All data fetched in sequence");
    })
    .catch((err) => {
        console.log("❌ Error occurred:", err);
    });

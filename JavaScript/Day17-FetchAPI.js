// ==================================================
// Fetch API Example
// ==================================================

// const baseURL = 'https://meowfacts.herokuapp.com/';
const baseURL = "https://openlibrary.org/people/mekBot/books/want-to-read.json";

// --------------------------------------------------
// Using Promise Chaining
// --------------------------------------------------

function getbooks() {
    console.log('Fetching data using promise chaining..');

    fetch(baseURL)
        .then((response) => {
            return response.json();
        })
        .then((finalData) => {
            console.log(finalData);

            let reading_log = finalData.reading_log_entries;
            console.log(reading_log);
        });
}

// Calling function
getbooks();

// --------------------------------------------------
// Using Async / Await
// --------------------------------------------------

let getApiData = async () => {
    console.log('fetching data using async await...');

    // use await as API takes time and is asynchronous
    let response = await fetch(baseURL);

    // use await as json() method is asynchronous
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let reading_log = jsonResponse.reading_log_entries[0].logged_edition;
    console.log('final fact is =' + reading_log);
};

// Calling async function
getApiData();

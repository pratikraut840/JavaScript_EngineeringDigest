// ==================================================
// Fetch API Example
// ==================================================

// Base URL for the API
// const baseURL = 'https://meowfacts.herokuapp.com/';
const baseURL = "https://openlibrary.org/people/mekBot/books/want-to-read.json";

// --------------------------------------------------
// Using Promise Chaining
// --------------------------------------------------

function getBooks() {
    console.log('📡 Fetching data using Promise chaining...');

    // fetch() returns a Promise
    fetch(baseURL)
        .then((response) => {
            // Convert response to JSON (also returns a Promise)
            return response.json();
        })
        .then((finalData) => {
            console.log('✅ Full API response:', finalData);

            // Extract reading log entries
            let readingLog = finalData.reading_log_entries;
            console.log('📚 Reading log entries:', readingLog);
        })
        .catch((err) => {
            console.error('❌ Error fetching data:', err);
        });
}

// Call the function
getBooks();

// --------------------------------------------------
// Using Async / Await
// --------------------------------------------------

// Async arrow function
let getApiData = async () => {
    console.log('📡 Fetching data using Async / Await...');

    try {
        // Await fetch() to resolve
        let response = await fetch(baseURL);

        // Await conversion to JSON
        let jsonResponse = await response.json();
        console.log('✅ Full API response:', jsonResponse);

        // Extract first logged edition
        let readingLog = jsonResponse.reading_log_entries[0].logged_edition;
        console.log('📖 First logged edition:', readingLog);

    } catch (err) {
        console.error('❌ Error fetching data:', err);
    }
};

// Call async function
getApiData();

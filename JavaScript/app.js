//fetch API
// const baseURL = 'https://meowfacts.herokuapp.com/';
const baseURL = "https://openlibrary.org/people/mekBot/books/want-to-read.json";

//html
const para = document.querySelector("#reading_log");
const button = document.querySelector("#button");
button.addEventListener("click", getApiData())

// //using promise chaining
function getbooks() {
    console.log('Fetching data using promise chaining..')
    fetch(baseURL).then((response) => {
        return response.json()
    }).then((finalData) => {
        console.log(finalData);
        let reading_log = finalData.reading_log_entries;
        console.log(reading_log);
    })
}
getbooks();

// Using Async Await handling
let getApiData = async () => {
    console.log('fetching data...');
    let response = await fetch(baseURL); //use await as API takes time and Asynchronous

    let jsonResponse = await response.json();//use await as json() method is Asynchronous
    console.log(jsonResponse);

    let reading_log = jsonResponse.reading_log_entries[0].logged_edition;
    console.log('final fact is =' + reading_log);

    para.innerText = reading_log.text;
}
getApiData();


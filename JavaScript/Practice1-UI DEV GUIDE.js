// ==================================================
// 1. Find the missing numbers from an array
// ==================================================
let array1 = [1, 2, 3, 5];
let count = 10;
let missingNumbers = [];

for (let i = 1; i <= count; i++) {
    if (!array1.includes(i)) {
        missingNumbers.push(i);
    }
}

console.log('Missing numbers:', missingNumbers); // [4, 6, 7, 8, 9, 10]


// ==================================================
// 2. Replace underscores with spaces and capitalize each word
// ==================================================
let string1 = 'ui_dev_guide';
let string2 = 'contact_details';

const underCapital = (string) => {
    // Split by underscores
    let words = string.split('_');
    console.log('Split words:', words);

    // Capitalize first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    console.log('Capitalized words:', words);

    // Join words back with spaces
    let finalString = words.join(' ');
    console.log('Final string:', finalString);
};

underCapital(string1); // Output: "Ui Dev Guide"
underCapital(string2); // Output: "Contact Details"


// ==================================================
// 3. Replace spaces with underscores (snake_case conversion)
// ==================================================
let s1 = 'ui dev guide';

// Split by spaces
let wordsArray = s1.split(' ');
console.log('Split words:', wordsArray);

// Convert all words to lowercase (optional if input may have caps)
for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i].toLowerCase();
}

// Join words with underscores
let finalSnakeCase = wordsArray.join('_');
console.log('Snake case string:', finalSnakeCase); // "ui_dev_guide"

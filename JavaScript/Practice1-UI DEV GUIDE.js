// ==================================================
// 1. Find the missing numbers from an array
// Input: array1 = [1,2,3,5], count = 10
// Output: Missing numbers from 1 to 10 that are not in array1
// ==================================================

let array1 = [1, 2, 3, 5];
let count = 10; // Maximum number in the range
let missingNumbers = [];

// Loop through numbers from 1 to `count`
for (let i = 1; i <= count; i++) {
    // If current number is not in the array, add to missingNumbers
    if (!array1.includes(i)) {
        missingNumbers.push(i);
    }
}

console.log('Missing numbers:', missingNumbers); 
// Expected Output: [4, 6, 7, 8, 9, 10]

// ==================================================
// 2. Replace underscores with spaces and capitalize each word
// Input: "ui_dev_guide" -> Output: "Ui Dev Guide"
// ==================================================

let string1 = 'ui_dev_guide';
let string2 = 'contact_details';

const underCapital = (string) => {
    // Step 1: Split string into words by underscore
    let words = string.split('_');
    console.log('Split words:', words);

    // Step 2: Capitalize first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    console.log('Capitalized words:', words);

    // Step 3: Join the words with spaces
    let finalString = words.join(' ');
    console.log('Final string:', finalString);
};

// Test the function
underCapital(string1); // Output: "Ui Dev Guide"
underCapital(string2); // Output: "Contact Details"

// ==================================================
// 3. Replace spaces with underscores (snake_case conversion)
// Input: "ui dev guide" -> Output: "ui_dev_guide"
// ==================================================

let s1 = 'ui dev guide';

// Step 1: Split the string into words by spaces
let wordsArray = s1.split(' ');
console.log('Split words:', wordsArray);

// Step 2: Convert all words to lowercase (optional, ensures uniformity)
for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i].toLowerCase();
}

// Step 3: Join the words with underscores
let finalSnakeCase = wordsArray.join('_');
console.log('Snake case string:', finalSnakeCase); // "ui_dev_guide"

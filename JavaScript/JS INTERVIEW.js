//question 1 https://medium.com/@sasindran.anusha/javascript-automation-interview-questions-ultimate-guide-4f228d6b4327
// Program to find if the two strings are Anagrams.
// Input : listen and silent
// Output : True

// /: Delimiters for the regular expression.
// \s: Matches any whitespace character (space, tab, newline, etc.).
// \d matches a digit.
// g: The "global" flag, meaning that all occurrences of the pattern are replaced, not just the first. 
// i: The "ignore case" flag, meaning that the search is case-insensitive.

// ==================================================
// 1. Check if two strings are Anagrams
// Input: "listen", "silent"
// Output: True
// ==================================================

function isAnagram(str1, str2) {

    // Remove whitespaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // If lengths are not equal, they cannot be anagrams
    if (str1.length !== str2.length) {
        console.log('Given input length is not equal');
        return false;
    }

    // Convert string to array, sort alphabetically, then join back to string
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        console.log('Given string is Anagram');
        return true;
    } else {
        console.log('Not an Anagram');
        return false;
    }
}

// Example usage
// isAnagram('silent', 'listen');

// ==================================================
// 2. Find the Second Smallest Number in an Array
// Input: [7,5,6,1,4,2]
// Output: 2
// ==================================================

function find2ndSmallest(arr) {
    // Remove duplicates using Set
    const uniqueArr = [...new Set(arr)];

    if (uniqueArr.length < 2) {
        console.log('Array must have at least 2 unique elements');
        return null;
    }

    // Sort in ascending order and get the second element
    uniqueArr.sort((a, b) => a - b);
    console.log('Second smallest element is:', uniqueArr[1]);
}

const input = [7, 5, 6, 1, 4, 2];
find2ndSmallest(input);

// ==================================================
// 3. Count Occurrence of a Character in a String
// Input: "programming", "m"
// Output: 2
// ==================================================

function countChar(str, inputChar) {
    let count = 0;
    for (let char of str) {
        if (char === inputChar) count++;
    }
    return count;
}

let strCount = 'programming';
let inputChar = 'g';
let finalCount = countChar(strCount, inputChar);
console.log('Count of character:', finalCount);

// ==================================================
// 4. Remove Duplicate Characters from a String
// Input: "banana"
// Output: "ban"
// ==================================================

// Method 1: Using Set
function removeDuplicate(str) {
    let uniqueStr = [...new Set(str)].join('');
    console.log(uniqueStr);
}
removeDuplicate('banana');

// Method 2: Using iterative approach
function removeDuplicate2(str) {
    let result = '';
    const seen = new Set();

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    console.log(result);
    return result;
}
removeDuplicate2('bananana');

// ==================================================
// 5. Find Missing Numbers in a Consecutive Sequence
// Input: [1,2,3,4,5,7,8,9]
// Output: 6
// ==================================================

function findMissing(arr) {
    const missingNo = [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) missingNo.push(i);
    }

    console.log('Missing numbers:', missingNo);
}

let seq = [1, 2, 3, 4, 5, 7, 8, 9];
findMissing(seq);

// ==================================================
// 6. Count occurrence of digit 3 between two numbers
// Input: start=30, end=35
// Output: 6 (30,31,32,33,34,35 contain '3')
// ==================================================

function countOccurrenceBet2Nums(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        const digits = i.toString();
        // Count how many times '3' appears in the number
        for (let d of digits) {
            if (d === '3') count++;
        }
    }
    console.log('Occurrences of 3:', count);
    return count;
}

countOccurrenceBet2Nums(30, 35);

// ==================================================
// 7. Extract all integers from a string
// Input: "he33llo 42"
// Output: 3342
// ==================================================

function extractInt(str) {
    const digits = str.match(/\d/g); // Match all digits
    if (digits) {
        const finalDigits = parseInt(digits.join('')); // Join and convert to number
        console.log('Joined digits are:', finalDigits);
        return finalDigits;
    } else {
        return null;
    }
}

extractInt('hellp12');

// ==================================================
// 8. Replace '/' in dates to get numeric output
// Input: "22/03/2024"
// Output: 22032024
// ==================================================

function replaceStr(str) {
    const numericStr = str.replace(/\//g, ''); // replace all slashes
    console.log('Numeric output:', numericStr);
}

replaceStr('22/03/2024');

// ==================================================
// 9. Verify Password Complexity
// Criteria: min 8 chars, at least 1 uppercase, 1 lowercase, 1 digit, 1 special char
// ==================================================

function verifyPassComplexity(str) {
    const rules = {
        minLength: str.length >= 8,
        hasLowerCase: /[a-z]/.test(str),
        hasUpperCase: /[A-Z]/.test(str), // fixed regex spacing
        hasDigit: /\d/.test(str),
        hasSpecialChar: /[\W_]/.test(str)
    }

    const isValid = Object.values(rules).every(rule => rule === true);

    if (isValid) {
        console.log('Password is complex & valid');
    } else {
        console.log('Password is invalid & easy to crack');
    }
}

verifyPassComplexity("Password@14645");

// ==================================================
// 10. Find all repeated characters in a string with their counts
// Input: "assessment"
// Output: s2,a1,e2,skip duplicates
// ==================================================

function findRepeatedCharCount(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (result.includes(str[i])) continue; // skip already counted characters

        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) count++;
        }

        result += str[i] + count;
    }

    console.log('Character counts:', result);
}

findRepeatedCharCount('assessment');

// ==================================================
// 11. Check if two strings are rotations of each other
// Input: "ABCD", "CDAB"
// Output: True
// ==================================================

function checkStringRotation(str1, str2) {
    if (str1.length !== str2.length) {
        console.log('Strings not eligible for rotation check');
        return false;
    }

    let combined = str1 + str1; // combine str1 with itself
    if (combined.includes(str2)) {
        console.log('String is rotational');
        return true;
    } else {
        console.log('String is not rotational');
        return false;
    }
}

checkStringRotation('ABCD', 'CDAB');

// ==================================================
// 12. Reverse each word in a string
// Input: "Hello World"
// Output: "olleH dlroW"
// ==================================================

function reverseWord(str) {
    let reversedWords = str
        .split(' ') // split sentence into words
        .map(word => word.split('').reverse().join('')) // reverse each word
        .join(' '); // join back with space

    console.log('Reversed words:', reversedWords);
}

reverseWord('Hello World');

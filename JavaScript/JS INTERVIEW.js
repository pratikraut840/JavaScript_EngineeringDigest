//question 1 https://medium.com/@sasindran.anusha/javascript-automation-interview-questions-ultimate-guide-4f228d6b4327
// Program to find if the two strings are Anagrams.
// Input : listen and silent
// Output : True

// /: Delimiters for the regular expression.
// \s: Matches any whitespace character (space, tab, newline, etc.).
// \d matches a digit.
// g: The "global" flag, meaning that all occurrences of the pattern are replaced, not just the first. 
// i: The "ignore case" flag, meaning that the search is case-insensitive.

function isAnagram(str1, str2) {

    //remove whitespaces, and convert to higher case
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // If lengths are not equal, they can't be anagrams
    if (str1.length !== str2.length) {
        console.log('given input length is not equal')
        return false
    }

    //convert to array, sort and compare
    sortedStr1 = str1.split('').sort().join('');
    sortedStr2 = str2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        console.log('given string is Anagram')
        return true
    }
}

// isAnagram('silent', 'listen')

//question2
// Find the Second Smallest in an Array
// Input : [7,5,6,1,4,2]
// Output : 2

function find2ndSmallest(arr) {

    //remove duplicates if any
    const sortedArr = [...new Set(arr)];

    //check if its length above two elements
    if (sortedArr.length >= 2) {
        console.log('This arr is eligible for sort');
    }

    //sort in asc and print second element
    let uniqueArr = sortedArr.sort();
    console.log(uniqueArr[1]);
}
const input = [7, 5, 6, 1, 4, 2]
find2ndSmallest(input);

//question 4 : Count Occurrence of a Character in a String
// Input String: “programming”
// Input Char : “m”
// Output : 2

function countChar(str, inputChar) {
    let count = 0;
    //loop through each character in the string.
    for (let char of str) {
        if (char === inputChar) {
            //For each match, increase counter.
            count++;
        }
    }
    return count;

}
let strCount = 'programming';
let inputChar = 'g'
let finalCount = countChar(strCount, inputChar)
console.log(finalCount);

// 4: Remove Duplicate Characters from a String
// Input : “banana”
// Output : “ban”

function removeDuplicate(str) {
    //remove duplicates and convert to array
    let sortedStr = [...new Set(str)];
    //join array elements
    uniqueStr = sortedStr.join('');
    console.log(uniqueStr);
}
removeDuplicate('banana')

function removeDuplicate2(str) {

    let result = '';
    const visible = new Set();

    for (let char of str) {
        if (!visible.has(char)) {
            visible.add(char);
            result += char;
        }
    }
    console.log(result);
    return result
}
removeDuplicate2('bananana')

//5. Find the Missing Numbers in a Consecutive Sequence
// Input : [1,2,3,4,5,7,8,9]
// Output : 6

const missingNo = [];
let seq = [1, 2, 3, 4, 5, 7, 8, 9];

function findMissing(arr) {
    min = Math.min(...arr);
    max = Math.max(...arr);

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missingNo.push(i)
        }
    }
    // return i;
    console.log(missingNo);
}
findMissing(seq)

//6. Count occurrence of 3 between two numbers
// Input : Start 30 and End 35
// Output : 6

let countNum = 0;
function countOccurrenceBet2Nums(num1, ...num2) {
    for (let i = num1; i <= num2; i++) {
        // Converts each number in the range to a string.
        const char = i.toString();
        // Checks each digit for '3'.
        if (char.includes('3')) {
            // Counts every occurrence.
            countNum++
        }
    }
    console.log(countNum);
    return countNum;
}
countOccurrenceBet2Nums(30, 35);

//7 Extract all Integers from a String
// Input : “he33llo 42”
// Output : 3342

function extractInt(strArr) {
    // Use regex to match all digits
    const digits = strArr.match(/\d/g);

    if (digits) {
        digits.join('');
    }
    else {
        return null;
    }
    let finalDigits = parseInt(digits.join(''))
    console.log('Joined digits are ' + finalDigits)

}
extractInt('hellp12')

//7 Replace ‘/’ in Dates to give only Numeric output
// Input : “22/03/2024”
// Output : 22032024

function replaceStr(str) {
    let sortedStr = str.replace('/', '');
    let int = parseInt(sortedStr);
    console.log(int)
}
replaceStr('444/123');


//8. Verify the Password Complexity by providing different password inputs. Acceptance Criteria : Password length should be minimum 8, It should contain at least one character, one special character, one numeric, one upper case and lower case letter.
// Input : Password@1
// Output : True

function verifyPassComplexity(str) {
    // for (let i = 0; i <= str.length; i++)
    const rules = {
        // minLength: str.length >= 8,
        // maxLength: str.length <= 16,
        hasLowerCase: /[a-z]/.test(str),
        hasUpperCase: /[A - Z]/.test(str),
        hasDigit: /\d/.test(str),
        hasSpecialChar: /[\W_]/.test(str)
    }

    const isValid = Object.values(rules).every(rule => rule === true);;

    if (isValid) {
        console.log('Password is complex & isValid')
    }
    else {
        console.log('Password is inValid & easy to crack')
        // }
    }
}
// verifyPassComplexity('Password@1')
verifyPassComplexity("Password@14645");

//8. Find all Repeated Characters in a String with its Count
// Input : “assessment”
// Output : s2,e2,m1,n1,t1,a1

function findRepeatedCharCount(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        if (result.includes(str[i])) {
            continue;
        }

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        result += str[i] + count
    }
    console.log(result)

}
findRepeatedCharCount('assisment')

//9. Check if the Two Strings are Rotations of each other
// Input : “ABCD” and “CDAB”
// Output : True

function checkStringRotation(str1, str2) {

    // if str2 is a rotation of str1, it must appear in str1 + str1.
    if (str1.length !== str2.length) {
        console.log('String is invalid for checking');
        return false;
    }

    let combined = str1 + str2
    if (combined.includes(str2)) {
        console.log('string is rotational')
        return true;
    }
    // For example: "ABCD" + "ABCD" = "ABCDABCD", which contains "CDAB" ✅
}
checkStringRotation('ABCD', 'ABDC')

//10. Reverse Each Word in a String
// Input :”Hello World”
// Output : “olleH dlroW”

function reverseWord(str) {

    //split string into word
    let splitStr = str.split(' ');

    //split into letter and reverse each letter and join
    // let reverseWords = splitStr.map((element) => { element.split('').reverse().join('') }); //need to check why failing because of {}

    let reverseWords = splitStr.map((element) =>
        element.split('').reverse().join(''));

    //join reverse word with spaces
    let finalWord = reverseWords.join(' ')
    // .toString();
    console.log(finalWord);

}
reverseWord('Hello World')
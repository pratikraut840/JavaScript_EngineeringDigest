//1. Find the missing numbers from array
let array1 = [1, 2, 3, 5];
let count = 10;
let num = 0;

let output = [];

for (let i = 1; i <= count; i++) {
    if (!array1.includes(i)) {
        output.push(i);
    }
}
console.log(output)

//2.Replace underscores with space and capitalize word
let string1 = 'ui_dev_guide';
let string2 = 'contact_details';


let underCapital = (string) => {
    let normalStr = string.split('_');
    console.log(normalStr);

    //split array
    //loop
    //make first letter capital
    //concat string by join

    for (let i = 0; i < normalStr.length; i++) {
        //modifying every first letter
        normalStr[i] = normalStr[i].charAt(0).toUpperCase() + normalStr[i].slice(1);

    }
    console.log(normalStr);

    let joinNormalString = normalStr.join(' ');
    console.log(joinNormalString);
}
underCapital(string1);

//3. Replace space with underscore
let s1 = 'ui dev guide';

let split = s1.split(' ');
console.log(split);

for (let i = 0; i < split.length; i++) {
    split[i] = split[i].toLowerCase();
}
let finalSplit = split.join('_');
console.log(finalSplit);
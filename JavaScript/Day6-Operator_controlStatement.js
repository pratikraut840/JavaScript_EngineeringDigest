// comparison operator
//equality operator
let num1 = 2;
let num2 = 4;
let equality = num1 == num2;
console.log(equality); //false

//string and number equality
let str1 = '5';
let num3 = 7;
console.log(str1 == num3); //false

//string and number strict equality
console.log(str1 === num3); //false

//string and number addition because JS smart enough and handle it as both string treat
let sum1 = str1 + num3;
console.log(sum1); //55
console.log(typeof (sum1));// string

//string and number subtraction because JS smart enough and handle it as subtract as number treat
let sum2 = str1 - num3;
console.log(sum2); //-2
console.log(typeof (sum2));// number

//not equal to
console.log(str1 != num3);
console.log(str1 !== num3);

//greater and less than
console.log(str1 > num3); //false
console.log(str1 < num3); //false

//greater equal to and less equal to
console.log(str1 >= num3); //false
console.log(str1 <= num3); //false

//Logical operator
//addition

let num5 = 66;
let num6 = 99;
console.log((num5 == num6) && (num5 === num6)); //false
console.log((num5 != num6) && (num5 >= num6)); //false
console.log((num5 != num6) && (num5 <= num6)); //true
console.log((num5 === num6) || (num5 <= num6)); //true
console.log(!(num5 == num6) || (num5 >= num6));//true

//if, loop, switch statement
let age = 45;
// if (age < 18) {
//     console.log("You are below age, not permitted")
// } else {
//     console.log("YOu are welcome, Happy evening")
// }

if (age >= 18 && age <= 40) {
    console.log("You are welcome, Happy evening")
} else if (age >= 45) {
    console.log("YOu are too old, Not preferred");
} else {
    console.log("You are below age, not permitted")
}

//for loop
let names = ['Pratik', 'Rajat', 'Sahil', 'Raja'];
for (let i = 0; i <= names.length; i++) {
    console.log(`Chronological order names are ${names[i]}`)
}

//while loop
let count = 0;
while (count <= 5) {
    console.log(`Print Hello`);
    count++;
}

//do while loop
let i = 10;
do {
    console.log(`Executing do once ${i}`)
} while (i >= 100)

//break statement
for (let i = 0; i <= 10; i++) {
    if (i == 3) {
        break;
    }
    console.log(`Executing for loop ${i} times`);
}

//continue statement
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(`Executing continue statement ${i} times`);
}

//switch case
let day = 'Monday';
switch (day) {
    case 'Monday': console.log('Today is the Monday')
        break;
    case 'Tuesday': console.log('Today is the Tuesday')
        break;
    case 'Wednesday': console.log('Today is the Wednesday')
        break;
    case 'Thursday': console.log('Today is the Thursday')
        break;
    case 'Friday': console.log('Today is the Friday')
        break;
    case 'Saturday': console.log('Today is the Saturday')
        break;
    case 'Sunday': console.log('Today is the Sunday')
        break;
}

//switch advances
let day1 = 'Monday';
switch (day1) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday': console.log('Today is the weekday')
        break;
    case 'Saturday':
    case 'Sunday': console.log('Today is the weekend')
        break;
}

var a ; //declaration
a = 10; // initialization
console.log(a); // usage

// dattatypes in js

var num1 = 99.22; // num
var str1 = 'Pratik'; //string
var isAdult = true; //boolean
var basicDetials = { //object
    name: 'pratik',
    visaStatus: true,
    city : 'Pune',
    company: 'TCS'
};

var favActorsArray = ['Salman','Shahid','Amir','Shahrukh']; //array
var bigInt = 88995555554444444445n;
var c;
typeof(c);
console.log(typeof(c));

let d = null;
console.log(d);

var num2 = ' 100 abc';
let parse = parseInt(num2);
console.log(parse);
console.log(typeof(parse))
typeof(parse);

var num3 = '200.40 abc';
var parseF = parseFloat(num3);
console.log(parseF);

console.log(num2.trim());
console.log(num1.toFixed());
console.log(num1.toString());
console.log(typeof(num1.toString()))


let str2 = "This is my city, Do you know";
str2 = 'This is my city, "Do you know"';
str2 = `   This is my city, "Do you know"    `;
console.log(str2);

//concatination using +
let str3 = "I love pune"+" I hate mumbai";
console.log(str3);

//interpolation using ${}
let name = 'Pratik';
let str4 = `Hello ${name}`;
console.log(str4);

//string methods
console.log(str2.length);
console.log(str2.trim());
console.log(str2.indexOf('D'));
console.log(str2.includes('know'));
console.log(str2.charAt(5));
console.log(str2.lastIndexOf('D'));
console.log(str2.split(','));
console.log(str2.substring(5,30));
console.log(str2.slice(8,22));
console.log(str2.toLocaleLowerCase());
console.log(str2.toLocaleUpperCase());
console.log(str2.replace('o','5'));

let array2 = [11,22,33,44,55];
for (let i of array2){
    console.log(i);
}

for(let i=0; i<=array2.length-1;i++){
    console.log(array2[i]);
}

let map = new Map;



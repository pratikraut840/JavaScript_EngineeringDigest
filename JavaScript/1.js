let a = 12.55;
let b = 'india';
let c = '233.55';
let array = [1, 2, 4, 5, 6, 7, 88];

let pInt = parseInt(c);
console.log(pInt);

let pFloat = parseFloat(a);
console.log(pFloat);

let fixed = a.toFixed(1);
console.log(fixed);

let string = c.toString();
console.log(string, typeof (string));


let s1 = 2 - '1'
console.log(s1);

let s2 = 'This is the India';
let length = s2.substring(5, 11);
console.log(length);

let ma = Math.round(Math.random() * 10e10);
console.log(ma)

for (let i of array) {

    if (i == 4) {
        continue;
    }
    console.log(i)
}

let array2 = [111, 21, 4, 15.88, 6, 7, 88];
let array3 = [1, 2, 4, 5, 6, 7, 88];

let result = array2.sort(function (a, b) { return a - b });
console.log(`Final result is ==> ${result}`);

let [a1, a2, a3] = array2
console.log(a1, a2, a3)

let fun = (a, b) => {
    return a + b
}

let arrow = fun(2, 12);
console.log(arrow)

let hof = (value1, value2) => {
    return fun(value1, value2)
}

let higher = hof(44, 88)
console.log(higher)

function add(...nums) {
    let sum = 0;
    for (let i in nums) {
        sum = sum + nums[i];
    }
    return sum;

}

console.log(add(10, 30))

let person = {
    name: 'pratik',
    age: 14,
    class: 'tenth',
    greet: function hello() {
        console.log('Hello' + this.name)
    }
}

console.log(person.age)
console.log(person.greet())


let hello = function sayHello() {
    console.log('hello')
}
hello();


//function1
function processData(data) {
    console.log('process...' + data)
}

//function2
function updateData(data) {
    console.log('updating...' + data)
}

//callback
function callFunction(functionName, value) {
    functionName(value);
}

callFunction(processData, 'RAJAT');


// ================================================================

//fun1
function addUser(username) {
    console.log('adding...' + username)
}

//fun2
function updateUser(username) {
    console.log('updating...' + username)
}

//callbacks
function dynamicFunc(funcName, value) {
    funcName(value);
}

dynamicFunc(updateUser, 'angela')


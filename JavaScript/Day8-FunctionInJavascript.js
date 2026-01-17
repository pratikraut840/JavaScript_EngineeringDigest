//functions

//1. non parameterized function

function addition() {
    console.log('This is non parameterized function')
}
addition();

//2. parameterized function without return keyword
function add(a, b) {
    let sum = a + b;
    console.log(sum);
}
add(4, 8)//
// let addFunction = add(22, 33);
//failed because it doesn't return anything

//3. parameterized function with return keyword
function sub(a, b, c) {
    return a - b + c;
}
let subtract = sub(8, 5, 5)
console.log(subtract);

//4. Arrow Function
let multiply = (a, b) => {
    return a * b;
}
let mul = multiply(7, 7)
console.log(mul);

//5. Default Value of argument Function
let division5 = (value = 100) => {
    return value / 5;
}
let device = division5(50);
console.log(device);

//6. Higher order function
let longAdd = (a, b, c, d) => {
    return a + b + c + d;
}
let longDivi = (a, b, c, d) => {
    return a + b + c + d;
}

let longFunction = (longAdd, longDivi) => {
    return longAdd / longDivi;
}
console.log(longFunction(8, 8));

//Higher order function example2
let additionOfTwoNum = (a,b) => a+b;

function higherOrderFun(fun){
    fun();
}

higherOrderFun(()=>{
    console.log("higherOrderFun2 :"+(additionOfTwoNum,6,8))
})

//7. spread operator
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumAddi(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];

    }
    return sum;
    // console.log(sum)
}

console.log(sumAddi(10, 20, 30));

let list1 = [1, 2, 3];
let list2 = [4, 5, 6];

//direct array addition add list into list with opening element 
let list3 = [list1, list2]
console.log(list3);

//spread operator opens up the list element
let list4 = [...list1, ...list2]
console.log(list4);


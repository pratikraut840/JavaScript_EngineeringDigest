//Array callback method in javascript
//1. forEach()

let list = [1, 2, 3, 4];

function process(value) {
    console.log('This process function is executed ' + value)
}

//traditional way
for (let i of list) {
    process(i);
}

//traditional way
for (let i = 0; i <= list.length - 1; i++) {
    console.log('Executing for loop');
}

//smart way using forEach
list.forEach(process);

list.forEach(
    function hello(value) {
        console.log('say hello ' + value)
    }
)

//arrow function in single line
list.forEach((value) => console.log('this is arrow function ' + value))

//2. map() method
//case is to multiply all elements by 10 and return newList
let list2 = [1, 2, 3, 4, 5];

let newList = list2.map((value) => {
    return value * 10;
})
console.log(newList);

//3. filter() method
let list3 = [24, 55, 88, 45666, 74, 66, 2, 11, 33];

function isEven(num) {
    return num % 2 == 0;
}

//traditional way
let emptyList = [];
for (let i of list3) {
    if (isEven(i)) {
        emptyList.push(i);
    }
}
console.log(`filter list is ${emptyList}`)

//smart way using filter
let filteredList = list3.filter(isEven);
console.log(filteredList);

// 4. reduce() method
let list4 = [10, 20, 30, 40, 50];
let finalList4 = list4.reduce((accumulator, current) => {
    return accumulator * current | 10;
})
console.log(finalList4);

//5. find()
let list5 = [1, 9, 5, 7, 5, 6, 3, 33];
let findList = list5.find((number) => {
    return number < 9
})
console.log(findList);

//6. every()

let list6 = [224, 66, 8, 34, 458, 844, 50];
let everyList = list6.every((number) => {
    return number % 2 == 0
})
console.log(everyList);

//7 some()
let list7 = [44, 56, 88, 22, 66,]
let someList = list7.some((number) => {
    return number % 2 !== 0
})
console.log(someList)

//8. sort()
let list8 = [1, 23, 45.6, 112.66, 99]
let finalSort = list8.sort() // [0.1,
console.log(finalSort);

//ASC order sort
let finalSort1 = list8.sort((a, b) => {
    return a - b;
})
console.log(finalSort1);

//DESC order sort
let finalSort2 = list8.sort((a, b) => {
    return b - a
});
console.log(finalSort2);

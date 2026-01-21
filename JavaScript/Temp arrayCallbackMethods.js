//Array callback methods are function that call a callbackFn and iterate over each elements of array

let list1 = [2, 5, 8, 10, 220, 333, 54, 88, 77, 134];

//forEach()
function printListNumbers(a) {
  console.log(a);
}
list1.forEach(printListNumbers);

//.map() - iterate and modify each elemenrnt and return new array
function multiplyNums(element){
return element * 10;
}

let newMapList = list1.map(multiplyNums);
console.log(newMapList);

//filter() - iterate and modify each element and return new array
function filterEven(element){
return element % 2 == 0;
}

let filteredList = list1.filter(filterEven);
console.log(filteredList);

//reduce() - iterate and need accumulator and startValue and return the single accumulated value
function sumOfAllDigits(accumulator, element){
    return accumulator + element;
}
let reduceList = list1.reduce(sumOfAllDigits,10);
console.log(reduceList);

//find() - iterate and find the first matching
function findFistMatiching(element){
    return element == 10;
} 
let findUsage = list1.find(findFistMatiching);
console.log(findUsage);

//every()  - iterate and return boolean if satisfy all condition
function checkAllOdd(element){
    return element % 2 == 1;
}
let checkOddNumbers = list1.every(checkAllOdd);
console.log(checkOddNumbers);

//some()  - iterate and return boolean if satisfy single condition
function checkIfOneOdd(element){
    return element % 2 == 1;
}
let checkIfOneOddNumbers = list1.some(checkIfOneOdd);
console.log(checkIfOneOddNumbers);

//sort() - iterate and return the result based on string input only, numerical comparison required condition
console.log('Check sorting without condition :'+list1.sort())

function sortNumbers(a,b){
    return a-b;
}
let checkSortedArray = list1.sort(sortNumbers);
console.log('Check sorting with condition :'+checkSortedArray);
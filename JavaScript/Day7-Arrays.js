//Arrays
let days = ['Monday', 'Tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(days);

//arrray length
let fruits = ['Apple', 'mango', 'grapes']
let fruitLength = fruits.length;
console.log(fruitLength);

//push to add at end
let fruitPush = fruits.push('banana');
console.log(fruits)

//unshift to add at start
let unshiftFruits = fruits.unshift('kiwi');
console.log(fruits);

//pop to remove from end
let popFruits = fruits.pop();
console.log(fruits);

//shift to remove from start
let shiftFruits = fruits.shift();
console.log(fruits);

//splice
let spliceFruits = fruits.splice(1, 2);
console.log(fruits);

//concat to join two array
let concatFruits = fruits.concat('pineapple', 'coconut', 'watermelon', 'cherry', 'cranberry')
console.log(concatFruits);

//slice method with start and end not fixed
let sliceFruits = concatFruits.slice(2, 5);
console.log(sliceFruits)

//join each element by string
let joinFruits = concatFruits.join('-');
console.log(joinFruits);
console.log(typeof (joinFruits))

//sort method
let sortArray = concatFruits.sort();
console.log(sortArray);


//sort method for numbers
let sortArray1 = concatFruits.sort(function (a, b) { return a - b });
console.log(sortArray1);

//reverse method
let reveredFruits = concatFruits.reverse();
console.log(reveredFruits);

//multi dimension array
let c1 = [1, 2, 3]
let c2 = [4, 5, 6]
let c3 = [7, 8, 9]
let merge = [c1, c2, c3];
console.log(merge);

//array destructure
let p1 = merge[0];
let p2 = merge[1];
let p3 = merge[2];
console.log(p1);
console.log(p2);
console.log(p3);

//spread syntax
let list1 = ['A', 'B', 'C'];
let list2 = ['D', 'E', 'F'];
let finalList = [...list1, ...list2];
console.log(finalList);
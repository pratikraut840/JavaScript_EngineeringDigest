//Object in js
// Object is a collection of key value pair in javascript
//java has hashmap, python has dictionary

let person = {
    name: 'pratik',
    age: 30,
    city: "pune",
    marks: 99.5
}

console.log(person.name)
console.log(person.age)
console.log(person.city)
console.log(person.marks)

// destructuring
let { name, age, city, marks } = person
console.log(name)

//shallow copy
//Object, Array
let obj1 = { name: 'raj', age: 30 }
let obj2 = { name: 'raj', age: 30 }
console.log(obj1 == obj2);//false because non-primitive data types stores at different memory location and check the value

//deep copy
let s1 = 'pratik';
let s2 = 'pratik';
console.log(s1 == s2);//true because primitive data types stores at same memory location and check the value
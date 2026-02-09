// ==================================================
// this Keyword Examples in JavaScript
// ==================================================

// --------------------------------------------------
// 1. this in a regular function (object method)
// --------------------------------------------------
// In a regular function, `this` refers to the object calling the function
let person = {
    name: 'pratik',
    age: 33,
    greet: function () {
        console.log('Regular function → this.name: ' + this.name);
    }
};

// Method call
person.greet(); 
// Output: Regular function → this.name: pratik

// --------------------------------------------------
// 2. this in an arrow function
// --------------------------------------------------
// Arrow functions do NOT have their own `this`
// They inherit `this` from the surrounding scope (lexical `this`)
// Here, the surrounding scope is global → `this.name` is undefined
let person2 = {
    name: 'naveen',
    age: 44,
    greet: () => {
        console.log('Arrow function → this.name: ' + this.name);
    }
};

person2.greet(); 
// Output: Arrow function → this.name: undefined

// --------------------------------------------------
// 3. Arrow function inside a regular function
// --------------------------------------------------
// Arrow function inherits `this` from the regular function scope
let person3 = {
    name: 'Rajesh',
    age: 44,
    greet: function () {
        setTimeout(() => {
            console.log('Arrow inside regular function → this.name: ' + this.name);
        }, 2000);
    }
};

person3.greet(); 
// Output after 2 seconds: Arrow inside regular function → this.name: Rajesh

// --------------------------------------------------
// 4. Regular function inside setTimeout (classic case)
// --------------------------------------------------
// A regular function inside setTimeout has its own `this` (window/global object)
let person4 = {
    name: 'Sahil',
    age: 25,
    greet: function () {
        setTimeout(function () {
            console.log('Regular function in setTimeout → this.name: ' + this.name);
        }, 2000);
    }
};

person4.greet(); 
// Output after 2 seconds: Regular function in setTimeout → this.name: undefined (in strict mode)

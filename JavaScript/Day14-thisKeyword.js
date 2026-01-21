// ==================================================
// this Keyword Examples
// ==================================================

// --------------------------------------------------
// this using a regular function
// Here, `this` refers to the object because it is a regular function
// --------------------------------------------------

let person = {
    name: 'pratik',
    age: 33,
    greet: function () {
        console.log('Hello using regular function ' + this.name); // person.name
    }
};

// Method call
person.greet(); // Hello using regular function pratik

// --------------------------------------------------
// this using an arrow function
// Here, `this` does NOT refer to the object because arrow functions
// do not have their own `this`
// --------------------------------------------------

let person2 = {
    name: 'naveen',
    age: 44,
    greet: () => {
        console.log('Hello using arrow function ' + this.name);
    }
};

// Method call
person2.greet(); // undefined

// --------------------------------------------------
// this using arrow function inside a regular function
// Arrow function inherits `this` from its surrounding scope
// --------------------------------------------------

let person3 = {
    name: 'Rajesh',
    age: 44,
    greet: function inner() {
        setTimeout(() => {
            console.log('Hello using arrow function after timeout ' + this.name);
        }, 2000);
    }
};

// Method call
person3.greet();

//this keyword

//this using regular function
//here this will search at the object level because its regular function
let person = {
    name: 'pratik',
    age: 33,
    greet: function () {
        console.log('Hello using regular function ' + this.name)
    }
}
//global scope
person.greet();//Hello using regular function pratik

//this using arrow Function
//here this will not search at the object level because its arrow function
let person2 = {
    name: 'naveen',
    age: 44,
    greet: () => {
        console.log('Hello using arrow function ' + this.name)
    }
}
person2.greet();//undefined

//this using arrow Function, achieving by writing it under normal function
let person3 = {
    name: 'Rajesh',
    age: 44,
    greet: function inner() {
        setTimeout(() => {
            console.log('Hello using arrow function after timeout ' + this.name)
        }, 2000);

    }
}
person3.greet();//undefined
// ==================================================
// Class and Objects (by Shraddha Khapra)
// Reference:
// https://www.youtube.com/watch?v=d3jXofmQm44&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=13
// ==================================================

// Parent class: Person
class Person {
    constructor(working) {
        console.log('Parent constructor === called');
        this.brand = working;          // Called by default when an object is created
        console.log('I started working with brand:', working);
        console.log('Parent constructor === exited');
    }

    // Parent methods
    eat() {
        console.log('I am eating');
    }

    sleep() {
        console.log('I am sleeping');
    }
}

// Creating an object of Person class
let human = new Person('Toyota'); // Constructor invoked
human.eat();                       // Method call
human.sleep();                     // Method call

console.log('--- End of Person class demo ---\n');

// ==================================================
// Inheritance Example: Engineer extends Person
// ==================================================
class Engineer extends Person {
    constructor(status) {
        console.log('Child constructor === called');
        super('Honda');             // Call parent constructor
        this.status = status;       // Set child-specific property
        console.log('Employee status set to:', status);
        console.log('Child constructor === exited');
    }

    // Child-specific methods
    setDesignation() {
        console.log('Designation set to: QA Engineer');
    }

    assignProject() {
        console.log('Project assigned: GOOGLE');
    }
}

// Creating object of Engineer class
let engineer = new Engineer('ACTIVE'); // Constructor invoked

engineer.setDesignation(); // Child method
engineer.assignProject();  // Child method

// Calling inherited parent methods
engineer.eat();           // Parent method
engineer.sleep();         // Parent method

console.log('--- End of Inheritance demo ---\n');

// ==================================================
// Error Handling using try...catch
// ==================================================
function handling() {
    try {
        console.log('random 1');
        console.log('random 2');
        console.log('random 3');
        console.log('random 4');

        // This will throw a ReferenceError because 'a' is not defined
        console.log(a); 

        console.log('random 6');
        console.log('random 7');
        console.log('random 8');
    } catch (err) {
        console.log('Error occurred:', err.message); // Log the error message
    } finally {
        console.log('Finally block executed (optional cleanup)');
    }
}

// Calling error handling function
handling();

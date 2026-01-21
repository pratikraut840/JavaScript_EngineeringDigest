// ==================================================
// Class and Objects (by Shraddha Khapra)
// Reference:
// https://www.youtube.com/watch?v=d3jXofmQm44&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=13
// ==================================================

class Person {
    constructor(working) { // Called by default when an object is created
        console.log('Parent constructor got ===called');
        this.brand = working;
        console.log('I started working');
        console.log('Parent constructor got ===exited');
    }

    eat() {
        console.log('I am eating');
    }

    sleep() {
        console.log('I am sleeping');
    }

    // setStatus(working) {
    //     this.working = working;
    //     console.log('I started working');
    // }
    // This behavior is handled using the constructor
}

// Creating object of Person class
let human = new Person('toyota'); // Constructor is invoked
human.eat();
human.sleep();
// human.setStatus('toyota'); // handled by constructor

// ==================================================
// Inheritance Example
// ==================================================

class Engineer extends Person {
    // When parent and child have the same method,
    // the child class method is used (Method Overriding)

    constructor(status) { // Called by default when an object is created
        console.log('Child constructor got ===called');
        super(); // Invokes parent class constructor
        this.status = status;
        console.log('Employee status set to ' + status);
        console.log('Child constructor got ===exited');
    }

    // setStatus(status) {
    //     this.status = status;
    //     console.log('Employee status set to ' + status);
    // }

    setDesignation() {
        console.log('Designation set to QA Engineer');
    }

    assignProject() {
        console.log('Project assigned as GOOGLE');
    }
}

// Creating object of Engineer class
let engineer = new Engineer('ACTIVE'); // Constructor is invoked
engineer.setDesignation();
engineer.assignProject();
// engineer.setStatus('ACTIVE'); // handled by constructor

// Calling methods from parent class
engineer.eat();
engineer.sleep();

// ==================================================
// Error Handling using try...catch
// ==================================================

function handling() {
    try {
        console.log('random 1');
        console.log('random 2');
        console.log('random 3');
        console.log('random 4');
        console.log(a); // ReferenceError
        console.log('random 6');
        console.log('random 7');
        console.log('random 8');
    } catch (err) {
        console.log('Error occurred');
    }
}

// Calling error handling function
handling();

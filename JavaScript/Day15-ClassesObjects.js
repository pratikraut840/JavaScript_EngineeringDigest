//Class and Objects by Shraddha khapra 
//https://www.youtube.com/watch?v=d3jXofmQm44&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=13
class Person {
    constructor(working) { //default called when object created
        console.log('Parent constructor got ===called');
        this.brand = working;
        console.log('I started working');
        console.log('Parent constructor got ===exited');
    }
    eat() {
        console.log('I am eating');
    }
    sleep() {
        console.log('I am sleeping')
    }

    // setStatus(working) {
    //     this.working = working;
    //      console.log('I started working');

    // }
    //we can achieve such methods using constructor

}

let human = new Person('toyota'); //constructor is invoked/called
human.eat();
human.sleep();
// human.setStatus('toyota'); this was done by constructor



class Engineer extends Person {
    // When parent class and child class have same method then child class method will be used and this is known as Method Overriding
    constructor(status) { //default called when object created
        console.log('Child constructor got ===called');
        super(); //to invoke parent class constructor
        this.status = status;
        console.log('Employee status set to ' + status);
        console.log('Child constructor got ===exited');
    }
    // setStatus(status) {
    //     this.status = status
    //     console.log('Employee status set to ' + status);
    // }

    setDesignation() {
        console.log('Designation set to QA Engineer');
    }
    assignProject() {
        console.log('Project assigned as GOOGLE')
    }
}

let engineer = new Engineer('ACTIVE');//object created and constructor called
engineer.setDesignation();
engineer.assignProject();
// employee.setStatus('ACTIVE'); // employee.setStatus('ACTIVE'); this was done by constructor

engineer.eat(); //calling method from parent class
engineer.sleep();//calling method from parent class


//error handling using try catch block
function handling() {
    try {
        console.log('random 1');
        console.log('random 2');
        console.log('random 3');
        console.log('random 4');
        console.log(a);
        console.log('random 6');
        console.log('random 7');
        console.log('random 8');
    } catch (err) {
        console.log('Error occurred')
    }
}
handling();


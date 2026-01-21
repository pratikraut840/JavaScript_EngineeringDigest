var person = {
    name:'Pratik',
    city:'Wardha',
    age:33,
    company:'TCS',
    isAdult:true
}
console.log(person);

console.log(person.name);




for(let i in person){
    console.log(i+" : "+person[i]);
}

//var is global scope, can be redeclare, reassign and hoisted
var a = 10;

var a =12;
console.log(a);

function getNumber(a)
{
    a = 15;
    return console.log(a);
}

getNumber(a);

//let is blocked scope, cannot redeclare, can reassign and cannot hoiseted 
let b=10;
b=100;
console.log(100);


function getNumber2(){
    let c=10;
    return console.log(c);
};
getNumber2()

const k=200;
// k=300;
console.log(k);

/*let myName = "James"
let myAge = 16
let myState = "Ebonyi"
console.log (" my name is" + myName + ", i am " + myAge + ", and i am from " + myState );
console.log (`My name is ${myName} i am from ${myState} i am ${myAge} years old`)

let name = "kelvin"
let age = 20

if (age >= 20) { 
    console.log(`${name} your are not Elegible`);
}
else{
    console.log(`${name} your are Elegible`);    
}

let Name = "Uchenna"
let Age = 20

if (age >=20) {
    console.log ( " you are not Elegible " + Name );
}
else{
    console.log( " you are Elegible " + Name );
}
let myVariable = "Hello, World"
let myNames = "Kelvin Bryan"
let Variable = "Web Developer"
let State = "Rivers"

console.log ( myVariable + " My name is " + myNames + " i am a " + Variable + " and i am from " + State )

let myVariables = "Hello, World"
let myNamess = "Uche Briggs"
let Variablee = "Realator"
let Statee = "Delta State"

console.log(` ${myVariables}  My name is  ${myNamess}  i am a  ${Variablee}  and i am from  ${Statee}`)



for (let a = 0; a <= 100; a ++) {
    console.log(a);
}*/





function sum(){
    let x = document.getElementById("form").value;
    let text;
    if(isNaN(x) || x < 10 || x > 20) {
        text = "Invalid input. Please enter a number between 10 and 20.";      
    }

    else {text = "Valid input"; }

   document.getElementById("reSult").innerHTML = text;
}

let student = {
    name: "John Doe",
    age: 18,
    grade: [1, 2, 3, 4],

    average: function() {
       let sum = this.grade.reduce((first, second) => first + second);
       return sum / this.grade.length;
    }
};

console.log(student.average());

    




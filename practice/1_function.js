// function
const nicoInfo = {
    name : "Nico",
    age : 33,
    gender : "male",
    isHansom : true
};

// console is object, console.log  >> log is function. built-in function
console.log(console);

// first function
function  sayHello() {
    console.log('Hello!!');
}
sayHello();

// function with argument
function sayHelloPotato(potato){
    console.log('Hello!!',potato);
}
sayHelloPotato("nico");


// Sexy Strings, it's Backtick
/* No returns.
function sayHelloSexy(name, age) {
    console.log(`Hello ${name}. You have ${age} years old.`);
}
const greetNico = sayHelloSexy("nico", 15);
console.log(greetNico); // undefined.
*/

function sayHelloSexy(name, age) {
    return `Hello ${name}. You have ${age} years old.`;
}
const greetNico = sayHelloSexy("nico", 15);
console.log(greetNico);

const calculator  = {
    plus : function(a,b){
        return a + b;
    },
    minus : function (a,b) {
        return a - b;
    },
    multi : (a,b) =>{
        return a*b;
    }
}
const plusResult = calculator.plus(5,5);
console.log(plusResult);
const minusResult = calculator.minus(5,5);
console.log(minusResult);
const multiResult = calculator.multi(5,5);
console.log(multiResult);






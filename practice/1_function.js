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
/*
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
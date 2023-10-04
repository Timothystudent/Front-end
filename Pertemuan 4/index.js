// JavaScript function

// function greetings() {
//     return "hello";
// }

// console.log(greetings());

// function greetings() {
//     return "hello";
// }
// const age = 17; //Global

// const greetings = function () {
//     //Parameter
//     console.log(age);
//     const job = "Teacher";
//     if( job == "Teacher");
//     return "Hello";
// }
// console.log(job);
// console.log(greetings("Timothy")); // Argument

// //IIFE
// // Anonymous Function 

// (function (){
//     console.log("Hello IIFE");
// })();

// callback function

function logGreetings(greetings) {
    console.log(greetings);
}

function createGreetings(name, callback){
    const greetings = "Hello" + name;
    callback(greetings);
}

createGreetings("John", logGreetings);
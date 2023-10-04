// import helloWorld, { fullName, numbers, john, hello } from "./utils.js";
// import sayGreetings
// console.log(fullName);
// console.log(numbers);
// console.log(john);
// console.log(hello);

// ASYNCHRONOUS JaveScript

//SYNCHRONOUS  --> single thread --> blocking
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");

//Asynchronous --> multi thread --> non-blocking
// 1. Parallel
// setTimeout(() => {
//     console.log("proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout(() => {
//     console.log("Proses 3");
// }, 4000);
// console.log("Proses 4");

//2. Concurent
//a. callback ES5
// setTimeout(() => {
//     console.log("proses 1")
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             },3000);
//         },3000);
//     },3000);
// }, 3000);

//b. promise ES6
//1. buat promise 
const newPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Berhasill")
    } else {
        reject("gagal")
    }
});

// then - catch
newPromise
    .then((result) => {
     console.log(result);
    })
    .catch((error) => console.log(error));

// async - await

const consumePromise = async () => {
    let result = await newPromise;
    console.log(result);
};

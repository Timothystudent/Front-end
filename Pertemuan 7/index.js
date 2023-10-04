// Jonathan Lukas

//String Literal

// let fullName = "John Doe";
// let age = 33;
// let address = "Manado";

// let kalimat5 = "Halo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address;
// console.log(kalimat5); 

// let kalimat6 = `Halo nama saya ${fullName}, umur saya tahun depan ${age+1} tahun dan saya tinggal di ${address}`;
// console.log(kalimat6); 

//Arrow Function

// function sayGreetings(name) {
//     return `Hello ${name}`;
// }
// console.log(sayGreetings("John"));

// const sayGreetings6 = (name) => {
//     return `Hello ${name}`;
// }
// console.log(sayGreetings6("Doe"));

// Implicit return value

// const sayGreetings7 = (name) => `Hello ${name}`;
// console.log(sayGreetings7("John Doe"));

// // Pada IIFE
// let output1 = (() => `Hello`)();
// console.log(output1)

// // Pada Callback
// let numbers =  [1, 2, 3, 4, 5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//Default Parameter

// const sayGreetings5 = (fullName) => {
//     if (fullName === undefined){
//         fullName = "John Doe";
//     }
//     if (age === undefined){
//         age = "33";
//     }
//     console.log(`Hello ${fullName}`);
// };


// const sayGreetings6 = (fullName = "John Doe", age = 33, address = "Manado") => {
//     console.log(`Hello ${fullName}, age = ${age}, address = ${address}`);
// }

// sayGreetings6();


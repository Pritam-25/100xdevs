"use strict";
//* number data type -->
let x = 156;
console.log(x);
//* string data type -->
let greet = "hello world";
console.log(greet);
//* function to add two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 12));
//* passing object in a function -->
function greeting(user) {
    console.log(`hello ${user.name}`);
}
// greeting({
//     name:"pritam",
//     age: 20
// })
let user = {
    name: "pritam",
    age: 20
};
greeting(user);
// in simple object we have to write same user in two different places  --->
// one in function and one in user variable
//* to fix this we have interface in TypeScript

//* number data type -->
let x:number = 156
console.log(x)

//* string data type -->
let greet: String = "hello world"
console.log(greet)

//* function to add two numbers
function sum(a: number, b:number): number{
    return a+b
}
console.log(sum(5, 12));

//* passing object in a function -->
function greets(user:{
    name: string,
    age: number
}) {
    console.log(`hello ${user.name}`);
}

// greeting({
//     name:"pritam",
//     age: 20
// })

let user:{
    name: string,
    age: number
} = {
    name:"pritam",
    age: 20
}

greets(user)


// in simple object we have to write same user in two different places  --->
// one in function and one in user variable
//* to fix this we have interface in TypeScript
const obj = {
    name: "pritam",
    age: 20
}

//* -----------------------> 
type person1 = typeof obj
/* 
type person1 = {
    name: string;
    age: number;
}
*/

//* ------------------------->
type person = keyof typeof obj
// type person = "name" | "age"

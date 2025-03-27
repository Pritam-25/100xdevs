// Touple: fixed length array

const person3: {
    name: string;
    age: number,
    product: [number, string],    
} = {
    name: "pritam",
    age: 21,
    product: [21, "typescript"],  // ["typescript", 21]  ❌ error
}

console.log(`name is: ${person3.name} \nage is: ${person3.age} \nlanguages: ${person3.product}`);

person3.product = [22, "python"]
console.log(person3.product);

// person3.product[0] = "c++"   ❌ error
// person3.product = [21, "python", "javascript"]  ❌ error

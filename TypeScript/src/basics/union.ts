//! UNION, | -> pipe in Typescript

function Combine(num1: number | string, num2: number | string): number | string {
    let result: number | string;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    } else {
        result = +num1 + +num2
    }
    return result;
}


const sum1 = Combine(10, 20); // 30
const CombinedName = Combine("Pritam", " Maity"); // Patel MernStack
console.log(sum1, CombinedName);
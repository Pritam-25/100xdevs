//! LITERAL TYPES 

function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}

//*      The unary plus operator (+) converts a value into a number. If num1 or num2 is a string representation of a number (e.g., "10"), it converts it to a numeric type before performing the addition.

const sum2 = combine("10", "20", "as-number"); // 30
const sum3 = combine(10, 50, "as-number");
const fullName = combine("Pritam", " Maity", "as-string"); // Patel MernStack
console.log(sum2, sum3, fullName);
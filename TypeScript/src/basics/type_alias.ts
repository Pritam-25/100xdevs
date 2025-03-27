// TYPE ALIAS / CUSTOM TYPES

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine2(num1: Combinable, num2: Combinable, conversionType: ConversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}


const sum4 = combine2("10", "20", "as-number"); // 30
const sum5 = combine2(10, 50, "as-number");
const fullNameIs = combine2("Pritam", " Maity", "as-string"); // Patel MernStack
console.log(sum4, sum5, fullNameIs);



// ===================================================  //

type UserIs = {
    name: string;
    age: number;
    skills: string[]
}

const newUser: UserIs = {
    name: "Pritam",
    age: 22,
    skills: ["Python", "Mechine Learning"]
}

function Greet(user: UserIs) {
    console.log(`Hi, I am ${JSON.stringify(user, null, 4)}`);
    //    The 2 means use 2 spaces for indentation

    /*
    
    {
        "name": "Pritam",
        "age": 22,
        "skills": [
            "Python",
            "Machine Learning"
        ]
    }

    */
}
Greet(newUser);


// ****************************************************   //

// const user = { name: "Pritam", age: 22, skills: ["Python", "Machine Learning"] };
// console.log(JSON.stringify(user));


//? {"name":"Pritam","age":22,"skills":["Python","Machine Learning"]}
// 🚫 Hard to read


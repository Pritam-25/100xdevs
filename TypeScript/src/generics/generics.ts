const fruits: Array<string> = []
fruits.push("mango")
fruits.push("apple")
fruits.push("banana")

// console.log(fruits);


type Person = {
    name: string,
    age: number
}

const Boy: Person = {
    name: "pritam",
    age: 20
}

const boys: Array<Person> = [
    {
        name: "pritam",
        age: 20
    },
    {
        name: "sunny",
        age: 21
    }
]

// console.log(boys);

// *  <=== ====>
function merge(objA: object, objB: object) {
    return { ...objA, ...objB }
}

const response = merge({ name: "pritam", age: 20 }, { hobby: 'gym' })
// console.log(response);


//Todo:  Now do this with generics
function Merge<T, U>(objA: T, objB: U) {
    return { ...objA, ...objB }
}

const newResponse = Merge({ name: "pritam", age: 20 }, { hobby: 'gym', anime: "naruto" })
// console.log(newResponse);


// *  <=== generic constraints  ===>
function createObject<T extends string, U extends number, V extends boolean>(
    key: T,
    value: U,
    isActive: V) {
    return { key, value, isActive }
}

function NewObject<T, U, V>(key: T, value: U, isActive: V)  // no constraints
{
    return { key, value, isActive }
}

const obj = createObject("monkMode", 100, true)
const newObject = NewObject({ name: "pritam" }, ["naruto", "sasuke"], 25)   //! no constraints put anything
// console.log(obj);
// console.log(newObject);


// *  <===== generic with interface ====>
interface Box<T> {
    value: T
}

const numBox: Box<number> = {
    value: 25
}

const stringBox: Box<string> = {
    value: "pritam"
}

// console.log(numBox);
// console.log(stringBox);


// * <==== generic default ====>

interface newResponse<T = string> {
    // if nothing provieded default value is string
    data: T,
    status: number
}

type Data = {
    success: boolean,
    message: string,
    additionalData: {
        createdAt: Date,
    }
}

const result: newResponse = { data: "success", status: 200 }   // nothing provide so treated default string

const newResult: newResponse<object> = { data: { success: true, message: "succesfull" }, status: 200 }

const output: newResponse<Data> = {
    data: {
        success: true,
        message: "succesfully created data",
        additionalData: { createdAt: new Date() }
    },
    status: 200
}

// console.log(result);
// console.log(newResult);
// console.log(output);


// *   <==== generic with class ===>



// * <==== key of ===>
function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const Person = { name: "pritam", age: 21 }
const name1 = getProperty(Person, "name")
console.log(name1);



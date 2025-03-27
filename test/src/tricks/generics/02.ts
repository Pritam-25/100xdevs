interface Person {
    firstName: string,
    lastName: string
}

const addIdToObject = <T>(obj: T) => {
    return {
        ...obj,
        id: "123"
    }
}

const result = addIdToObject<Person>({ firstName: "pritam", lastName: "maity" })

console.log(result);
//              ^?

type Result = typeof result

type PrettifyResult<T> = {
    [k in keyof T]: T[k]
}


type newResult = PrettifyResult<Result>
//    ^?


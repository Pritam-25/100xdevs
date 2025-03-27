const func1 = () => {
    const val = "string"
    return val;
}

const func2 = async () => {
    const val = "string"
    return val;
}


type return1 = ReturnType<typeof func1>  // string

type return2_wrong = ReturnType<typeof func2>  // Promise<string>
type return2_right = Awaited<ReturnType<typeof func2>>  // string

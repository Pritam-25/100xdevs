interface MainType {
    name: string,
    age: number
}

type NestedType = MainType & {
    isDeveloper: boolean
}

type Prettify<T> ={
    [k in keyof T]:T[k]
}

type idk = Prettify<NestedType>
const makeFetch = <T>(url: string): Promise<T> => {
    return fetch(url).then((res) => res.json())
}

makeFetch<{ firstName: string; lastName: string }>("/api/endpoint").then((res) => {
    console.log(res);
    //           ^?            
})
type ApiResponse<T> =
    { success: true; data: T; statuscode: number }
    | { success: false, message: string; statuscode: number }

let response1: ApiResponse<string> = {
    success: true,
    data: "succesfull",
    statuscode: 200
}

let response2: ApiResponse<number> = {
    success: true,
    data: 10,
    statuscode: 200
}

let response3: ApiResponse<number> = {
    success: false,
    message: "There is an error",
    statuscode: 200
}


function add(a: number, b: number): number {
    return a + b;
}

function greeting(name: string): void {
    console.log(name);
}

//*  <==  Bad approach  ==>
let test: Function
// test = 20  // ❌ invalid
test = add  // ✅ valid
console.log(test(5, 10));   // 15

//*  <== Good Approach ==>
let show: (x: number, y: number) => number
show = add
console.log(show(13, 9));
// show = greeting    // ❌ invalid


//*  <== passing callback function as an arguments ==>

type CB = (x: number) => void

function addition(a: number, b: number, cb: CB) {
    let result = a + b
    cb(result)
}

addition(10, 20, (num: number) => {
    console.log(num);
})


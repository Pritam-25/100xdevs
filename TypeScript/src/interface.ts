//* defining a interface ---->
interface User {
    name: string,
    age: number,
    address:{
        city: string,
        country: string,
        pincode: number
    }
}

let user1: User = {
    name: "pritam",
    age: 21,
    address:{
        city: "kolkata",
        country: "India",
        pincode: 721437
    }
}


function isLegal(user: User): boolean{
    if(user.age > 18)
        return true
    else 
        return false
}

const vote = isLegal(user1)

if(vote)
    console.log('elegible for vote');
else console.log('not elegible');

    


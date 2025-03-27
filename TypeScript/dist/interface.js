"use strict";
let user1 = {
    name: "pritam",
    age: 21,
    address: {
        city: "kolkata",
        country: "India",
        pincode: 721437
    }
};
function isLegal(user) {
    if (user.age > 18)
        return true;
    else
        return false;
}
const vote = isLegal(user1);
if (vote)
    console.log('elegible for vote');
else
    console.log('not elegible');

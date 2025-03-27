type Admin = {
    role: "admin";
    permissions: string[];
};

type Users = {
    role: "user";
    name: string;
};

let person: Admin | Users;

person = { role: "admin", permissions: ["read", "write"] };  // ✅ Allowed
person = { role: "user", name: "Pritam" };                   // ✅ Allowed

// person = { role: "user", name: "Pritam", age: 21 };       //  ❌ Error   can't add extra variable     
// ----------------------------------------------------------------------------------------

// person = { role: "guest" };                                  // ❌ Error (Neither "admin" nor "user")/
// ___________________________________________________________________________________________

// person = {role: "admin", permissions: ["read", "write"], role: "user", name: "Pritam" };     
// ❌ Error because the object cannot have both roles ("admin" and "user") at the same time when using a union (|) type.        

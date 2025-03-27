enum Role {
    ADMIN,
    AUTHOR
}

const person4 = {
    name: "Patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.AUTHOR
};

if (person4.role === Role.AUTHOR) {
    console.log("Author");
} else if (person4.role === Role.ADMIN) {
    console.log("Admin");
} else {
    console.log("Read user only");
}

class Department {
    name: string

    constructor(name: string) {
        this.name = name
    }

    describe(this: Department) {
        console.log("Department: ", this.name);
    }
}

const dept = new Department("cse")
dept.describe()


const deptCopy = {
    name: "ece",
    describe : dept.describe
}

deptCopy.describe()
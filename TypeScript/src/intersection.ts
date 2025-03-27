type Employee = {
  name: string;
  id: number;
};

type Manager = {
  department: string;
  employees: string[];
};

type TeamLead = Employee & Manager;

let lead: TeamLead = {
  name: "Pritam",
  id: 101,
  department: "Engineering",
  employees: ["Alice", "Bob"],
};



type AdminRole = {
  role: "admin";
  permissions: string[];
};

type UserRole = {
  role: "user";
  name: string;
};


// Intersection Type (Combines both Admin and User properties)
let Auther: AdminRole & UserRole;

type Author = {
  role: "admin" & "user";  // ❌ Impossible!
  permissions: string[];
  name: string;
  age: 21   // we can add extra variable
};


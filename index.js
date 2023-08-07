const inquirer = require('inquirer');
const CLI = require('./CLI.js');
const mysql = require('mysql2');

const viewQuestions = [
  {
    type: "list",
    name: "mainOptions",
    message: "What would you like to do?",
    choices: ["View all Departments",
    "View all Roles",
    "View all Employees",
    "Add a Department", 
    "Add a Role",
    "Add an Employee",
    "Update an Employee Role",
    "Quit"],
    loop: false,
  }
];

const newDeptQuestions = [
  {
    name: "department",
    message: "Name new department: "
  }
];

const newRoleQuestions = [
  {
    name: "role",
    message: "Title of new role:"
  },
  {
    name: "salary",
    message: "New role's salary"
  },
  {
    type: "list",
    name: "enterDept",
    message: "New role's department: ",
    choices: ["Marketing",
    "Finance",
    "Human Resources",
    "Production",
    "Development"],
    loop: false,
  }
];

const newEmployeeQuestions = [
  {
    name: "firstName",
    message: "Employee's First Name: ",
  },
  {
    name: "lastName",
    message: "Employee's Last Name: "
  },
  {
    type: "list",
    name: "employeeRole",
    message: "New employee's role: ",
    choices: [
      "Senior Staff",
      "Staff"
    ]
  },
  {
    type: "list",
    name: "employeeManager",
    message: "New employee's manager: ",
    choices: [1, 2, 3, 4]
  }
];

const updateEmployee = [
  {
    type: "list",
    name: "employee",
    message: "Select an employee to update: ",
    choices: [
      "Lucas Young",
      "Ryan Downer",
      "Samantha Grilling"
    ]
  },
  {
    name: "employeeID",
    message: "Employee's ID: "
  },
  {
    type: "list",
    name: "updates",
    message: "Employee's new role: ",
    choices: [
      "Senior Staff",
      "Staff"
    ]
  }
]

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'h2UBx562yPD7(N4',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// Look into switch-case 

function menuOptions() {
inquirer
  .prompt(viewQuestions).then(function(response){
    if (response.mainOptions === "View all Departments") {
      console.log("here are the departments!")
      cli.viewDepartment();
    } else if (response.mainOptions === "View all Roles"){
      console.log("here are all the roles!");
      cli.viewRoles();
    } else if (response.mainOptions === "View all Employees"){
      console.log("View all Employees");
      cli.viewEmployees();
    } else if (response.mainOptions ===  "Add a Department"){
      console.log("Adding a department");
      inquirer 
        .prompt(newDeptQuestions).then(function(response){
          cli.addDepartment(response);
        });
    } else if (response.mainOptions === "Add a Role"){
      console.log("Adding a role");
      inquirer 
        .prompt(newRoleQuestions).then(function(response){
          cli.addRole(response);
        });
    } else if (response.mainOptions === "Add an Employee"){
      console.log("Adding an Employee");
      inquirer 
        .prompt(newEmployeeQuestions).then(function(response){
          cli.addEmployee(response);
        });
    } else if (response.mainOptions === "Update an Employee Role"){
      console.log("Updating an employee")
      inquirer
        .prompt(updateEmployee).then(function(response){
          cli.updateEmployee(response);
        })
    } else {
      console.log("Thank you for using the Employee Tracker")
      return;
    }
  })
}

const cli = new CLI(db, menuOptions);

menuOptions();
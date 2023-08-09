const inquirer = require('inquirer');
const CLI = require('./CLI.js');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'h2UBx562yPD7(N4',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

const cli = new CLI(db, menuOptions);

const viewQuestions = [
  {
    type: "list",
    name: "mainOptions",
    message: "\x1b[32mWhat would you like to do?\x1b[0m",
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
    message: "Name of new department: "
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
    choices: () => cli.getDepartments(),
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
    choices: () => cli.getRoles(),
    loop: false
  },
  {
    type: "list",
    name: "employeeManager",
    message: "New employee's manager: ",
    choices: () => cli.getManagers(),
    loop: false
  }
];

const updateEmployee = [
  {
    type: "list",
    name: "employee",
    message: "Select an employee to update: ",
    choices: () => cli.getEmployees(),
    loop: false
  },
  {
    type: "list",
    name: "newRole",
    message: "Employee's new role: ",
    choices: () => cli.getRoles(),
    loop: false
  }
]

function menuOptions() {
inquirer
  .prompt(viewQuestions).then(function(response){
    if (response.mainOptions === "View all Departments") {
      cli.viewDepartment();
    } else if (response.mainOptions === "View all Roles"){
      cli.viewRoles();
    } else if (response.mainOptions === "View all Employees"){
      cli.viewEmployees();
    } else if (response.mainOptions ===  "Add a Department"){
      inquirer 
        .prompt(newDeptQuestions).then(function(response){
          cli.addDepartment(response);
        });
    } else if (response.mainOptions === "Add a Role"){
      inquirer 
        .prompt(newRoleQuestions).then(function(response){
          cli.addRole(response);
        });
    } else if (response.mainOptions === "Add an Employee"){
      inquirer 
        .prompt(newEmployeeQuestions).then(function(response){
          cli.addEmployee(response);
        });
    } else if (response.mainOptions === "Update an Employee Role"){
      inquirer
        .prompt(updateEmployee).then(function(response){
          cli.updateEmployee(response);
        })
    } else {
      console.log("\n\x1b[32mThank you for using the Employee Tracker!\x1b[0m\n");
      process.exit();
    }
  })
}

function welcome(){
  console.log(
    `\x1b[32m
    ╭━━━╮╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━━━╮╱╱╱╱╱╱╭╮
    ┃╭━━╯╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮╭╮┃╱╱╱╱╱╱┃┃
    ┃╰━━┳╮╭┳━━┫┃╭━━┳╮╱╭┳━━┳━━╮╰╯┃┃┣┻┳━━┳━━┫┃╭┳━━┳━╮
    ┃╭━━┫╰╯┃╭╮┃┃┃╭╮┃┃╱┃┃┃━┫┃━┫╱╱┃┃┃╭┫╭╮┃╭━┫╰╯┫┃━┫╭╯
    ┃╰━━┫┃┃┃╰╯┃╰┫╰╯┃╰━╯┃┃━┫┃━┫╱╱┃┃┃┃┃╭╮┃╰━┫╭╮┫┃━┫┃
    ╰━━━┻┻┻┫╭━┻━┻━━┻━╮╭┻━━┻━━╯╱╱╰╯╰╯╰╯╰┻━━┻╯╰┻━━┻╯
    ╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╭━╯┃
    ╱╱╱╱╱╱╱╰╯╱╱╱╱╱╱╰━━╯ \x1b[0m \n`
  )
}

welcome();
menuOptions();
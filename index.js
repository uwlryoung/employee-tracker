const inquirer = require('inquirer');
const CLI = require('./CLI.js');
const mysql = require('mysql2');

// Connects database to mysql
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'h2UBx562yPD7(N4',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// a CLI class constructor that holds all the db.queries. See CLI.js.
const cli = new CLI(db, menuOptions);

// Questions required for the menu and adding/deleting information from the database.
// Skip to Line 157 to get past the questions
const viewQuestions = [
  {
    type: "list",
    name: "mainOptions",
    message: "\x1b[32mWhat would you like to do?\x1b[0m",
    choices: ["View Departments",
    "View Roles",
    "View Managers",
    "View Employees",
    "Add Department", 
    "Add Role",
    "Add Manager",
    "Add Employee",
    "Update Employee Role",
    "Delete Department",
    "Delete Role",
    "Delete Employee",
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

const newManagerQuestions = [
  {
    name: "firstName",
    message: "Managers's First Name: ",
  },
  {
    name: "lastName",
    message: "Manager's Last Name: "
  },
  {
    type: "list",
    name: "employeeRole",
    message: "New manager's role: ",
    choices: () => cli.getRoles(),
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
];

const deleteDepartment = [
  {
    type: "list",
    name: "department",
    message: "Which department do you want to delete? ",
    choices: () => cli.getDepartments(),
    loop: false
  },
];

const deleteRole = [
  {
    type: "list",
    name: "role",
    message: "Which role do you want to delete? ",
    choices: () => cli.getRoles(),
    loop: false
  },
];

const deleteEmployee = [
  {
    type: "list",
    name: "employee",
    message: "Which employee do you want to remove? ",
    choices: () => cli.getEmployees(),
    loop: false
  },
];

// The main menu function that lists all of the program's functions
function menuOptions() {
inquirer
  .prompt(viewQuestions).then(function(response){
    if (response.mainOptions === "View Departments") {
      cli.viewDepartment();
    } else if (response.mainOptions === "View Roles"){
      cli.viewRoles();
    } else if (response.mainOptions === "View Managers"){
      cli.viewManagers();  
    } else if (response.mainOptions === "View Employees"){
      cli.viewEmployees();
    } else if (response.mainOptions ===  "Add Department"){
      inquirer 
        .prompt(newDeptQuestions).then(function(response){
          cli.addDepartment(response);
        });
    } else if (response.mainOptions === "Add Role"){
      inquirer 
        .prompt(newRoleQuestions).then(function(response){
          cli.addRole(response);
        });
    } else if (response.mainOptions === "Add Manager"){
      inquirer
        .prompt(newManagerQuestions).then(function(response){
          cli.addManager(response);
        });
    } else if (response.mainOptions === "Add Employee"){
      inquirer 
        .prompt(newEmployeeQuestions).then(function(response){
          cli.addEmployee(response);
        });
    } else if (response.mainOptions === "Update Employee Role"){
      inquirer
        .prompt(updateEmployee).then(function(response){
          cli.updateEmployee(response);
        });
    } else if (response.mainOptions === "Delete Department") {
      inquirer
        .prompt(deleteDepartment).then(function(response){
          cli.removeDepartment(response);
        });
    } else if (response.mainOptions === "Delete Role") {
      inquirer
        .prompt(deleteRole).then(function(response){
          cli.removeRole(response);
        });
    } else if (response.mainOptions === "Delete Employee") {
      inquirer
        .prompt(deleteEmployee).then(function(response){
          cli.removeEmployee(response);
        });
    } else {      
      console.log("\n\x1b[32mThank you for using the Employee Tracker!\x1b[0m\n");
      process.exit();
    }
  })
}

// The Welcome Screen function
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

// Calling the Functions to start the program
welcome();
menuOptions();
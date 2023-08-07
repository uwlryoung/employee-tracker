const inquirer = require('inquirer');
const CLI = require('./CLI.js');

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
    message: "Type the name of a new department you want to add: "
  }
]



const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
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
        })
    } else if (response.mainOptions === "Add a Role"){
      console.log("Adding a role");
      cli.addRole();
    } else if (response.mainOptions === "Add an Employee"){
      console.log("Adding an Employee");
      cli.addEmployeee();
    } else if (response.mainOptions === "Update an Employee Role"){
      console.log("Updating an employee")
      cli.updateEmployee();
    } else {
      console.log("Thank you for using the Employee Tracker")
      return;
    }
  })
}

const cli = new CLI(db, menuOptions);

menuOptions();
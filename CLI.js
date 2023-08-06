const inquirer = require('inquirer');

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
]

function menuOptions() {
inquirer
  .prompt(viewQuestions).then(function(response){
    if (response.mainOptions === "View all Departments") {
      console.log("here are the departments!")
      menuOptions();
    } else if (response.mainOptions === "View all Roles"){
      console.log("here are all the roles!");
      menuOptions();
    } else if (response.mainOptions === "View all Employees"){
      console.log("View all Employees");
      menuOptions();
    } else if (response.mainOptions ===  "Add a Department"){
      console.log("Adding a department");
      menuOptions();
    } else if (response.mainOptions === "Add a Role"){
      console.log("Adding a role");
      menuOptions();
    } else if (response.mainOptions === "Add an Employee"){
      console.log("Adding an Employee");
      menuOptions();
    } else if (response.mainOptions === "Update an Employee Role"){
      console.log("Updating an employee")
      menuOptions();
    } else {
      console.log("Thank you for using the Employee Tracker")
      return;
    }
  })
}

menuOptions();
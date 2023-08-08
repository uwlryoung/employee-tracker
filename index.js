const inquirer = require('inquirer');
const CLI = require('./CLI.js');
const mysql = require('mysql2');

// const departments = addDeptObj();

const departments = [
  {
    id: 1,
    department: "Marketing"
  }, 
  {
    id: 2,
    department: "Finance"
  },
  {
    id: 3,
    department: "Human Resources"
  },
  {
    id: 4,
    department: "Production"
  }
];

const roleChoices = departments.map(obj => ({
  name: `${obj.department}`,
  value: `${obj.id}`
}));

// function deptConvert (departments) {
//   const deptObject = [];
//   for (let i = 0; i < departments.length; i++) {
//     deptObject.push(departments[i].department)
//   }
//   return deptObject;
// };

// const roleChoices = departments.map(obj => ({
//   name: `${obj.department}`,
//   value: obj
// }));

// const roles = [];

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
    // choices: addDeptObj(),
    // choices: [1,2,3,4,5,6],
    choices: roleChoices,
    // choices: deptConvert(departments),
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
    choices: [1,2,3,4,5]
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
      console.log("Thank you for using the Employee Tracker")
      process.exit();
    }
  })
}

// function addDeptObj() {
//   db.query(`SELECT * FROM departments;`, (err, result) => {
//     if (err) {
//       console.log("Error, err")
//     }

//     const departments = result.map(obj = ({
//       id: `${obj.id}`,
//       dept_name: `${obj.dept_name}`
//     }))
    
//     return departments;
//   })
// };

// const roleChoices = departments.map(obj => ({
//   name: `${obj.department}`,
//   value: obj
// }));

const cli = new CLI(db, menuOptions);

// addDeptObj();
menuOptions();
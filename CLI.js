const { up } = require('inquirer/lib/utils/readline');
const mysql = require('mysql2');

// CLI class holds all of the necessary functions to make mysql queries
class CLI {
  constructor(db, init) {
    this.db = db;
    this.init = init;
  }
  viewDepartment(){
    this.db.query(`SELECT * FROM department;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  }

  addDepartment(newDept) {
    this.db.query(`INSERT INTO department (dept_name) VALUES ('${newDept.department}')`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    })
  };

  removeDepartment() {

  }

  viewRoles(){
    this.db.query(`SELECT * FROM roles;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  }

  addRole(newRole) {
    this.db.query(`INSERT INTO department (dept_name) VALUES ('${newRole.department}')`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    })
  };

  removeRole() {

  }

  viewEmployees(){
    this.db.query(`SELECT * FROM employees;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  }

  addEmployee(newEmployee) {
    this.db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) 
                  VALUES ('${newEmployee.firstName}','${newEmployee.lastName}','${newEmployee.employeeRole}','${newEmployee.employeeManager}')`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    })
  };

  updateEmployee(updates) {
    this.db.query(`UPDATE employees SET role_id = ${updates.role_id},WHERE id = ${updates.employeeID};`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    }


  };

  removeEmployee() {

  }
}

module.exports = CLI;



// class Employee {
//   constructor(firstName, lastName, roleID, managerID){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.roleID = roleID;
//     this.managerID = managerID;
//   }


// class Role {
//   constructor(title, salary, deptID){
//     this.title = title;
//     this.salary = salary;
//     this.dept_ID = deptID;
//   }

// class Department {
//   constructor(name) {
//     this.name = name;
//   }
const mysql = require('mysql2');


class CLI {
  constructor(db, init) {
    this.db = db;
    this.init = init;
  }
// }
  viewDepartment(){
    this.db.query(`SELECT * FROM department;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(results);
      this.init();
    })

  }

 


// class Department {
//   constructor(name) {
//     this.name = name;
//   }

  addDepartment(newDept) {
    this.db.query(`INSERT INTO department (dept_name) VALUES ('${newDept.department}')`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(results);
      this.init();
    })

  };

  removeDepartment() {

  }
// }

// class Role {
//   constructor(title, salary, deptID){
//     this.title = title;
//     this.salary = salary;
//     this.dept_ID = deptID;
//   }

  addRole() {

  };

  removeRole() {

  }
// }

// class Employee {
//   constructor(firstName, lastName, roleID, managerID){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.roleID = roleID;
//     this.managerID = managerID;
//   }

  addEmployee() {

  };

  updateEmployeeRole() {

  }

  removeEmployee() {

  }
}

module.exports = CLI;
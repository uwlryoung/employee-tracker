const { up } = require('inquirer/lib/utils/readline');
const mysql = require('mysql2');

// CLI class holds all of the necessary functions to make mysql queries
class CLI {
  constructor(db, init) {
    this.db = db;
    this.init = init;
  }

  viewDepartment(){
    this.db.query(
      `SELECT id, dept_name AS Departments FROM departments;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  }

  addDepartment(newDept) {
    this.db.query(`INSERT INTO departments (dept_name) VALUES ('${newDept.department}')`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      this.viewDepartment();
    })
  };

  removeDepartment() {}

  viewRoles(){
    this.db.query(
      // `SELECT id, title, salary FROM roles
      `SELECT roles.id, roles.title AS Role, roles.salary AS Salary, departments.dept_name AS Department 
      FROM roles 
      RIGHT JOIN departments 
      ON roles.department_id = departments.id
      WHERE roles.id IS NOT NULL;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  }

  addRole(newRole) {
    this.db.query(
      `INSERT INTO roles (title, salary, department_id) 
      VALUES ('${newRole.role}',${newRole.salary},${newRole.enterDept})`, (err, result) => {
      if (err) {
        console.log("Error", err)
      } 
      this.viewRoles();
    })
  };

  removeRole() {}

  viewEmployees(){
    this.db.query(
      `SELECT employees.id, employees.first_name AS 'First Name', employees.last_name AS 'Last Name', roles.title AS Role, employees.manager_id 
      FROM employees 
      RIGHT JOIN roles 
      ON employees.role_id = roles.id
      WHERE employees.id IS NOT NULL;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  }

  // `SELECT employees.id, employees.first_name, employees.manager_id, x.id, x.first_name
  // FROM employees, x
  // WHERE employees.manager_id = x.id;`


  addEmployee(newEmployee) {
    this.db.query(
      `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
      VALUES ('${newEmployee.firstName}','${newEmployee.lastName}',${newEmployee.employeeRole},${newEmployee.employeeManager})`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      this.viewEmployees();
    })
  };

  updateEmployee(updates) {
    this.db.query(`UPDATE employees SET role_id = ${updates.role_id},WHERE id = ${updates.employeeID};`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  };

  removeEmployee() {}
}

module.exports = CLI;

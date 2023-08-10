const mysql = require('mysql2');

// CLI class holds all of the necessary functions to make mysql queries
class CLI {
  constructor(db, init) {
    this.db = db;
    this.init = init;
  }

  //Department Related Functions
    // Differences between the "getDepartments" and "viewDepartments" is that get functions are used to
    // return the values so that the terminal will display the list of departments. This is the same for
    // the other get functions, "getRoles", "getManagers", "getEmployees"
  getDepartments(){
    return this.db.promise().query(
      `SELECT id, dept_name AS Departments FROM departments ORDER BY dept_name;`).then((result) => {
      const departments = result[0].map(obj => ({
        name: obj.Departments,
        value: obj.id
      }))
      return departments;
    })
  }

  viewDepartment(){
    this.db.query(
       `SELECT id, dept_name AS Departments FROM departments;`, (err, result) => {
       if (err) {
         console.log("Error", err)
       }
       // departments.push(result);
       console.table(result);
       this.init();
     });
   }

   addDepartment(newDept) {
    this.db.query(`INSERT INTO departments (dept_name) VALUES ('${newDept.department}')`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.log(`
      \x1b[32mSuccessfully added \x1b[34m${newDept.department}\x1b[0m \x1b[32mto Departments! 
      Select "View Departments" to view it.\x1b[0m\n`);
      this.init();
    })
  };

  removeDepartment(department){
    this.db.query(
      `DELETE FROM departments WHERE id = ${department.department}`, (err, result) => {
        if (err) {
          console.log("Error", err)
        }
      console.log(`
      \x1b[32mSuccessfully deleted department!\x1b[0m\n`)
      this.init();
      }
    )
  };

  // Role related functions
  getRoles(){
    return this.db.promise().query(
      `SELECT id, title as Roles FROM roles ORDER BY Roles;`).then((result) => {
        const roles = result[0].map(obj => ({
          name: obj.Roles,
          value: obj.id
        }))
        return roles;
      })
  }

  viewRoles(){
    this.db.query(
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
      console.log(`
      \x1b[32mSuccessfully added \x1b[34m${newRole.role}\x1b[0m \x1b[32mto Roles!
      Select "View All Roles" to view it.\x1b[0m\n`);
      this.init();
    })
  };

  removeRole(role){
    this.db.query(
      `DELETE FROM roles WHERE id = ${role.role}`, (err, result) => {
        if (err) {
          console.log("Error", err)
        }
      console.log(`
      \x1b[32mSuccessfully deleted role!\x1b[0m\n`)
      this.init();
      }
    )
  };

  // Employees Related Functions
  getEmployees(){
    return this.db.promise().query(
      `SELECT id, CONCAT(first_name, ' ', last_name) AS Employees, role_id FROM employees ORDER BY Employees`).then((result) => {
        const employees = result[0].map(obj => ({
          name: obj.Employees,
          value: obj.id
        }))
        return employees;
      })
  }

  viewEmployees(){
    this.db.query(
      `SELECT employees.id, employees.first_name AS 'First Name', employees.last_name AS 'Last Name', departments.dept_name AS Department, roles.title AS Role, roles.salary AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager 
      FROM employees 
      LEFT JOIN roles 
      ON employees.role_id = roles.id
      LEFT JOIN Departments ON roles.department_id = departments.id
      LEFT JOIN employees Manager ON manager.id = employees.manager_id
      WHERE employees.id IS NOT NULL
      ORDER BY employees.id;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  }

  addEmployee(newEmployee) {
    this.db.query(
      `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
      VALUES ('${newEmployee.firstName}','${newEmployee.lastName}',${newEmployee.employeeRole},${newEmployee.employeeManager})`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.log(`
    \x1b[32mSuccessfully added \x1b[34m${newEmployee.firstName} ${newEmployee.lastName}\x1b[0m \x1b[32mas a new employee!
    Select "View Employees" to view them.\x1b[0m\n`);
      this.init();
    })
  };

  updateEmployee(updates) {
    this.db.query(`UPDATE employees SET role_id = ${updates.newRole} 
    WHERE id = ${updates.employee};`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.log(`
    \x1b[32mSuccessfully updated the employee's role!
    Select "View Employees" to view their new role.\x1b[0m\n`);
      this.init();
    });
  };

  removeEmployee(employee){
    this.db.query(
      `DELETE FROM employees WHERE id = ${employee.employee}`, (err, result) => {
        if (err) {
          console.log("Error", err)
        }
      console.log(`
      \x1b[32mSuccessfully removed employee!\x1b[0m\n`)
      this.init();
      }
    )
  };

  // Manager Related Functions
  getManagers(){
    return this.db.promise().query(
      `SELECT id, CONCAT(first_name, ' ', last_name) AS Managers, manager_id FROM employees
      WHERE manager_id IS NULL;`). then((result) => {
        const managers = result[0].map(obj => ({
          name: obj.Managers,
          value: obj.id
        }))
        return managers;
      })
  }

  viewManagers(){
    this.db.query(
      `SELECT employees.id, employees.first_name AS 'First Name', employees.last_name AS 'Last Name', roles.title AS Role, roles.salary AS Salary 
      FROM employees 
      RIGHT JOIN roles 
      ON employees.role_id = roles.id
      WHERE manager_id IS NULL
      ORDER BY employees.id;`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.table(result);
      this.init();
    });
  };

  addManager(newManager) {
    this.db.query(
      `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
      VALUES ('${newManager.firstName}','${newManager.lastName}',${newManager.employeeRole},NULL)`, (err, result) => {
      if (err) {
        console.log("Error", err)
      }
      console.log(`
    \x1b[32mSuccessfully added \x1b[34m${newManager.firstName} ${newManager.lastName}\x1b[0m \x1b[32mas a new manager!
    Select "View Managers" to view them. You can also view them by selecting "View Employees".\x1b[0m\n`);
      this.init();
    })
  };

}

module.exports = CLI;

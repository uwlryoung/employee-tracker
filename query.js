const express = require('express');
const mysql = require('mysql2');

class Department {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  addDepartment() {

  };

  removeDepartment() {

  }
}

class Role {
  constructor(id, title, salary, deptID){
    this.id = id;
    this.title = title;
    this.salary = salary;
    this.dept_ID = deptID;
  }

  addRole() {

  };

  removeRole() {

  }
}

class Employee {
  constructor(id, firstName, lastName, roleID, managerID){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleID = roleID;
    this.managerID = managerID;
  }

  addEmployee() {

  };

  updateEmployeeRole() {

  }

  removeEmployee() {

  }
}

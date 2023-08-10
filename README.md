# Employee Tracker
![License](https://img.shields.io/badge/License-MIT_License-blue.svg)
  
  ## Description
  A command-line run program that keeps track of a company's employees which includes information such as: Departments, Roles, Managers, Salary, Employees. The information is stored in a database. 
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#how-to-contribute)
  - [License](#license)
  - [How to Test](#how-to-test)
  - [Questions](#questions)
  - [Challenges and Future Improvements](#challenges-and-future-improvements)

  ## Installation
  Clone the repository into a desired location. 
  ### Required Tools
  Ensure that you have these tools installed: 

  1. [Node.js](https://nodejs.org/en)
  2. [mySQL](https://www.mysql.com/) 

  ## Usage
  1. Navigate to the project in a terminal of your choice. 
  2. Run `npm i` in terminal to install all dependencies ([Inquirer](https://www.npmjs.com/package/inquirer) and [mysql2](https://www.npmjs.com/package/mysql2)). 
  3. Initilize the company_db database by navigating to ./db within the Employee Tracker folder and logging into mysql by typing `mysql -u root -p`. Once logged in, type in `SOURCE schema.sql;`  
     - There is a seeds.sql file that you may optionally run by typing in `SOURCE seeds.sql`. This puts in pre-existing data into the database. You can edit this file with real information from your company and then run the file. 
  4. Once you have the database initalized, exit mysql and type in `node index.js` to run the program. A menu will show all of the options available to you: 
     - View Departments/Roles/Managers/Employees
     - Add Department/Role/Manager/Employee
     - Update Employee
     - Delete Department/Role/Manager/Employee
     - Quit

     ![Menu Options](/assets/images/menu.png)  
  5. Select the option you wish to choose and follow the prompts. 


### Deleting a Manager
- There is no "Delete Manager" funciton. To delete a manager, you will have to delete the employee all together. 
- After deleting a manager, there may be an existing role with no manager leaving the id, First Name and Last Name of that role as "null". If you add a new manager and assign it to that role with null, the new manager will be listed and null will no longer show.
![View Managers](/assets/images/viewManagers.png)

### Video Demonstration
See our video demonstration that explains how to use the program and showcases all of its features. 
## Credits
N/A

  ## How to Contribute
  Clone the project and push changes. Changes will be reviewed and accepted if approved. 

   ## How to Test
  Run the program and try all of the features it offers. 

  ## License 
  Employee Tracker is covered under the MIT License.

  ## Questions
  [GitHub Profile](https://github.com/uwlryoung)

  If you have any questions, feel free to email uwlryoung@gmail.com

  ## Challenges and Future Improvements 
  - Updating an employee's manager. 
  - Shortening the main menu to have categories "View, Add, Delete, Update" and selecting those will show more options such as "Add Department, Add Role, " etc. 
  - Sorting methods to view employees by department, role, and manager. 
  
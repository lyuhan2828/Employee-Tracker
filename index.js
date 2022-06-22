var inquirer = require('inquirer');
const mysql2 = require('mysql2');
const department = require("");
const employee = require("");
const role = require('');
const fs = require('fs');
require('console.table');


const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'employeetracker'
    });

    db.connect((err)=> {
if(err)throw(err)
console.log('connected')
    });
    
    function init() {
      inquirer
      .prompt([
        {
          type: "input",
          name: "role",
          message: "What would you like to do"?
          choices: ["Add Department", "Add Role", "Add Employee"],  
      },

      ])
      .then(function (answers) {
        console.log(answers);
        console.log(answers.add);
        if (answers.role == "Add Department") {
          return inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "What is the name of the department?",
                choices: ["Sale", "Legal", "Engineering", "Finance"],
              },
            ])
            .then(function (departmentAnswers) {
              console.log(departmentAnswers);
              console.log(
                departmentAnswers.id
              );
              // add the department answers intro the array as an object
              //here you will use your Lib classes to pass the data and get a department back
              const department = new department(
                departmentAnswers.name,
                departmentAnswers.id,
              );
              team.push(department);
  
              addemployee();
            });
        } else if (answers.role == "Add Role") {
          return inquirer
            .prompt([
              {
                type: "input",
                name: "role",
                message: "What is the name of your role?",
                choices: ["Secretary", "Lawyer", "Software Engineer", "Accountant"],
              },
              {
                type: "input",
                name: "salary",
                message: "What is the salary of the role?",
              },
              {
                type: "input",
                name: "department_id",
                message: "Which department does the role belong to?",
                choices: ["Sale", "Legal", "Engineering", "Finance"],
              },
            ])
            .then(function (roleAnswers) {
              console.log(roleAnswers);
              console.log(
                roleAnswers.id,
                roleAnswers.salary,
                roleAnswers.department_id
              );
              // add the role answers intro the array as an object
              //here you will use your Lib classes to pass the data and get a role back
              const role = new role(
                roleAnswers.name,
                roleAnswers.id,
                roleAnswers.salary,
                roleAnswers.department_id
              );
              team.push(role);
  
              addemployee();
            });
        } else if (answers.role == "Add Employee");
        {
          return inquirer
            .prompt([
              {
                type: "input",
                name: "firstname",
                message: "What is the employee's first name?",
              },
              {
                type: "input",
                name: "lastname",
                message: "What is the employee's last name?",
              },
              {
                type: "input",
                name: "role",
                message: "What is employee's role?",
                choices: ["Secretary", "Lawyer", "Software Engineer", "Accountant"],
              },
              {
                type: "input",
                name: "manager",
                message: "Whho is the employee's manager?",
              },
            ])
            .then(function (employeeAnswers) {
              console.log(employeeAnswers);
              console.log(
                employeeAnswers.id,
                employeeAnswers.role_id,
                employeeAnswers.manager_id
              );
            });
        }
      });
  }
  init();
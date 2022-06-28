
import inquirer from 'inquirer';
import mysql from 'mysql2';
import table from "console.table"

function addEmployee(params) {
  
}

const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Yimbff1y!',
    database: 'employeetracker'
  });

const team  = []; 
function ViewDepartment() {
  let sqlcall = "SELECT * FROM department;"
  db.query(sqlcall, (error, table)=> {
if(error) {
  throw error
}
else {
  console.table(table)
  init()
}
  })
}
function ViewRole() {
  let sqlcall = "SELECT * FROM  role;"
  db.query(sqlcall, (error, table)=> {
    if(error) {
      throw error
    }
    else {
      console.table(table)
      init()
    }
  })
}
function ViewEmployee() {
  let sqlcall = "SELECT * FROM  employee;"
  db.query(sqlcall, (error, table)=> {
    if(error) {
      throw error
    }
    else {
      console.table(table)
      init()
    }
  })
}
function UpdateEmployeeRole() {
  let sqlcall = "INSERT INTO employe;"
  db.query(sqlcall, (error, table)=> {
    if(error) {
      throw error
    }
    else {
      console.table(table)
      init()
    }
  })
}

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What would you like to do",
        choices : ["Add Department", "Add Role", "Add Employee", "View Role", "View Department", "View Employee", "Update Employee Role"],
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
            },
          ])
          .then(function (departmentAnswers) {
            console.log(departmentAnswers);
            init();
            /// create implementation for addEmployee


            addEmployee();
          });
      } 
      else if (answers.role == "Add Role") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "role",
              message: "What is the name of your role?",
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
            },
          ])
          .then(function (roleAnswers) {
            console.log(roleAnswers);
            console.log(
              roleAnswers.id,
              roleAnswers.salary,
              roleAnswers.department_id
            );
            init();
            // add the role answers intro the array as an object
            //here you will use your Lib classes to pass the data and get a role back
            // const role = new Role(
            //   roleAnswers.name,
            //   roleAnswers.id,
            //   roleAnswers.salary,
            //   roleAnswers.department_id
            // );
            // team.push(role);

            addEmployee();
          });
      } 
      else if (answers.role == "Add Employee")
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
            },
            {
              type: "input",
              name: "manager",
              message: "Who is the employee's manager?",
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
      else if (answers.role == "View Department")
      {
        ViewDepartment()
      }
      else if (answers.role == "View Role")
      {
        ViewRole()
      }
      else if (answers.role == "View Employee")
      {
        ViewEmployee()
      }
      else if (answers.role == "Update Employee Role")
      {
        UpdateEmployeeRole()
      }
    });
}

init();
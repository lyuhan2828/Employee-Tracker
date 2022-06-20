var inquirer = require('inquirer');
const mysql2 = require('mysql2');
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
    
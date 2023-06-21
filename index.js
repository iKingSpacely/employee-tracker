const inquirer = require('inquirer');
const mysql = require('mysql12');

const db = mysql.connect({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employees_db'
},
    console.log(`Connected to the employees_db database.`)
);


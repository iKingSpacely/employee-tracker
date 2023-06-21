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


inquirer
    .createPromptModule([
        {
            type: 'list',
            message: 'What would you like to see?',
            name: 'home',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
        },
        {
            type: 'list',
            message: 'Which department would you like to see?',
            name: 'departments',
            choices: ['UX/UI', 'Business Development', 'Marketing'],
        },
        {
            type: 'list',
            message: 'Which employee roles would you like to see?',
            name: 'roles',
            choices: ['Sr. Vice President', 'Sr. Director', 'Director', 'Project Manager', 'Sr. Developer', 'Jr. Associate',],
        },
        {
            type: 'input',
            message: 'Please enter the name of the department you would like to add.',
            name: 'add_department',
            choices: [''],
        },
        {
            type: 'input',
            message: 'Please enter the role title you would like to add.',
            name: 'add_title',
            choices: [''],
        },
        {
            type: 'input',
            message: 'Please enter the name of the new employee you would like to add.',
            name: 'add_employee',
            choices: [''],
        },
        {
            type: 'input',
            message: 'Please enter the name of the employee you would like to update',
            name: 'add_employee',
            choices: [''],
        },
    ]);
    


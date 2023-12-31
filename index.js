const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const db = mysql.connect({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employees_db'
},
    console.log(`Connected to the employees database.`)
);


function startPrompts() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to see?',
                name: 'home',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
            }
        ]).then(res => {
            switch (res.home) {
                case "View all departments":
                    viewDepartments()
                    break;
                case "View all roles":
                    viewRoles()
                    break;
                case "View all employees":
                    viewEmployees()
                    break;
                case "Add a department":
                    addDepartments()
                    break;
                case "Add a role":
                    addRole()
                    break;
                case "Add an employee":
                    addEmployee()
                    break;
                case "Update employee role":
                    updateEmp()
                    break;
            }
        })
};


function viewDepartments() {
    db.query('SELECT * FROM department', (err, departments) => {
        if (err) throw err;
        console.table(departments)
        startPrompts();
    })
};

function viewRoles() {
    db.query('SELECT * FROM employee_roles', (err, infos) => {
        if (err) throw err;
        console.table(infos)
        startPrompts();
    })
};

function viewEmployees() {
    db.query('SELECT * FROM employee_info', (err, infos) => {
        if (err) throw err;
        console.table(infos)
        startPrompts();
    })
};

function addDepartments() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the name of the department you would like to add.',
                name: 'addDept',
            },

        ]).then((res) => {
            db.query('INSERT INTO department SET ?;', {
                department_name: res.addDept
            });
            startPrompts();
        })
};

function addRole() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the role you would like to add.',
            name: 'add_role',
        },
        {
            type: 'input',
            message: 'Please enter the salary you would like to include for this role.',
            name: 'add_salary',
        },
        {
            type: 'input',
            message: 'Please enter the department id for this role.',
            name: 'add_id',
        },
    ]).then((res) => {
        db.query("INSERT INTO employee_roles SET ?;", {
            title: res.add_role,
            salary: res.add_salary,
            department_id: res.add_id
        });
        startPrompts();
    })
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the first name of the employee you would like to add.',
                name: 'first_name',
            },
            {
                type: 'input',
                message: 'Please enter the last name of the employee you would like to add.',
                name: 'last_name',
            },
            {
                type: 'input',
                message: 'Please enter the role id of the employee you would like to add.',
                name: 'role_id',
            },
            {
                type: 'input',
                message: 'Please enter the manager id of the employee you would like to add.',
                name: 'manager_id',
            },
        ]).then(({ first_name, last_name, role_id, manager_id }) => {
            db.query("INSERT INTO employee_info SET ?;", { first_name:first_name, last_name:last_name, role_id:role_id, manager_id:manager_id }, (err) => {
                if (err) throw err;
                else console.log("New employee was added successfully!")
                startPrompts();
            });
        })
};

function updateEmp() {
    inquirer.prompt([

        {
            type: "input",
            message: "Enter the employees last name you'd like to change",
            name: "last_name",
        },
        {
            type: "input",
            message: "What is their new role id?",
            name: "role_id",
        },
    ]).then((res) => {
        db.query("UPDATE employee_info SET role_id = ? WHERE last_name = ?;", [res.role_id, res.last_name], (err) => {
            if (err) console.log(e);
            else console.log("Employee was updated")
            startPrompts();
        });
        
    })
}

startPrompts();
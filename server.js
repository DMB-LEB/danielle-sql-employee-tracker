// Imports for 'Require', 'MySQL2', and 'Express'
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3306;
const app = express();
require('dotenv').config();

// 'Express' middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = mysql.createConnection({
    host: process.env.HOST,
    port: PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
console.log(`Connected to employeeTracker_db on PORT: ${PORT}`);

connection.connect((err) => {
    if (err) throw err;
    startApp();
});

startApp = () => {
    inquirer.prompt([
        {
            name: 'firstInquiry',
            type: 'list',
            message: 'Thank you for accessing the Employee Management Database. What action would you like to take?',
            choices: ['View all departments', 'View all roles', 'View all employees',
                'Add a department', 'Add a role', 'Add an employee', 'Update employee(s) role',
                'Update employee(s) manager', 'Remove a department','Remove a role', 'Remove an employee', 
                'View total salary of department', 'Exit program']
        }])
    .then((response) => {
        switch (response.firstInquiry) {
            case 'View all departments':
                viewAllDepartments();    
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
            break;
            case 'Add a role':
                addARole();
            break;
            case 'Add an employee':
                addAnEmployee();
            break;
            case 'Update employee(s) role':
                updateEmployeeRole();
            break;
            case 'Remove a department':
                removeADepartment();
            break;
            case 'Remove a role':
                removeARole();
            break;
            case 'Remove an employee':
                removeAnEmployee();
            break;
            case 'Remove a manager':
                removeAManager();
            break;
            case 'View total salary of department':
                viewDepartmentSalary();
            break;
            case 'Exit program':
                connection.end();
                console.log('You have now exited the Employee Management Database. Thank you!');
                return;
            default:
                break;
        }
    })
};

viewAllDepartments = () => {
    connection.query(`SELECT * FROM department;`, (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    })
};

const viewAllRoles = () => {
    connection.query('SELECT * FROM role;', function (err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
  };
  
  const viewAllEmployees = () => {
    connection.query(
        `SELECT 
            employee.employee_id, 
            employee.first_name, 
            employee.last_name,
            role.salary, employee.role_id, 
            employee.department_id, 
            department.department_name, 
            employee.manager_id 
        FROM 
            employee
            JOIN department on department.department_id = employee.department_id
            JOIN role on employee.role_id = role.role_id`,
        function (err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
    });
  };

  const addDepartment = () => {
    inquirer.prompt([
        {
          name: 'department',
          type: 'input',
          message: 'Please input a new department name.',
        },
      ])
      .then(answer => {
        connection.query(
          'INSERT INTO department (department_name) VALUES (?)',
          [answer.department],
          function (err, res) {
            if (err) throw err;
            console.log('Department successfully added.');
            startApp();
          }
        );
      });
    };

    addARole = () => {
        connection.query(`SELECT * FROM department;`, (err, res) => {
            if (err) throw err;
            let departments = res.map(department => ({name: department.department_name, value: department.department_id }));
            inquirer.prompt([
                {
                name: 'title',
                type: 'input',
                message: 'What role would you like to add?'   
                },
                {
                name: 'salary',
                type: 'input',
                message: 'What is the salary for this role?'   
                },
                {
                name: 'departmentName',
                type: 'list',
                message: 'Which department should this new role be added to?',
                choices: departments
                },
            ]).then((response) => {
                connection.query(`INSERT INTO role SET ?`, 
                {
                    title: response.title,
                    salary: response.salary,
                    department_id: response.departmentName,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`New role, ${response.title} successfully added to database.`);
                    startApp();
                })
            })
        })
    };

    addAnEmployee = () => {
        connection.query(`SELECT * FROM role;`, (err, res) => {
            if (err) throw err;
            let roles = res.map(role => ({name: role.title, value: role.role_id }));
            connection.query(`SELECT * FROM employee;`, (err, res) => {
                if (err) throw err;
                let employee = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id}));
                inquirer.prompt([
                    {
                        name: 'firstName',
                        type: 'input',
                        message: "New employee's first name:"
                    },
                    {
                        name: 'lastName',
                        type: 'input',
                        message: "New employee's last name:"
                    },
                    {
                        name: 'role',
                        type: 'list',
                        message: "Please select new employee's title:",
                        choices: roles
                    },
                    {
                        name: 'manager',
                        type: 'list',
                        message: "Please select new employee's manager:",
                        choices: employee
                    }
                ]).then((response) => {
                    connection.query(`INSERT INTO employee SET ?`, 
                    {
                        first_name: response.firstName,
                        last_name: response.lastName,
                        role_id: response.role,
                        manager_id: response.manager,
                        // employee_id: response.employee,
                    }, 
                    (err, res) => {
                        if (err) throw err;
                    })
                    connection.query(`INSERT INTO role SET ?`, 
                    {
                        department_id: response.dept,
                    }, 
                    (err, res) => {
                        if (err) throw err;
                        console.log(`${response.firstName} ${response.lastName} successfully added to database.`);
                        startApp();
                    })
                })
            })
        })
    };
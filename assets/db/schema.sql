Drop DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department(
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (department_id)
);

CREATE TABLE role (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (role_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(department_id) ON DELETE CASCADE
);

CREATE TABLE employee (
    employee_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    department_id INT,
    manager_id INT,
    PRIMARY KEY (employee_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(role_id) ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(employee_id) ON DELETE SET NULL
    );

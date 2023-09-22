INSERT INTO department (department_name)
VALUES 
('Deli'),
('Bakery'),
('Meat'),
('Produce'),
('Front End'),
('Corporate');

INSERT INTO role (title, salary, department_id)
VALUES 
('Department Manager', 55000, 1),
('Assistant Manager', 45000, 4),
('Service Leader', 40000, 5),
('Deli Clerk', 38000, 4),
('Bakery Clerk', 38000, 6),
('Meat Clerk', 38000, 6),
('Produce Clerk', 38000, 3),
('Service Associate', 38000, 3),
('Store Manager', 65000, 4),
('Store Assistant Manager', 60000, 2),
('Human Resources', 70000, 1),
('Book Keeping', 65000, 2);

INSERT INTO employee (first_name, last_name, role_id, department_id, employee_id)
VALUES 
('Jess', 'Bell', 2, 2, 8876),
('Carter', 'Hatch', 1, 3, 9678),
('Kristin', 'Moores', 3, 4, 1040),
('David', 'Lafond', 3, 5, 5575),
('Natalie', 'Diamond', 2, 1, 3277),
('Roy', 'Branson', 1, 3, 9154),
('Shana', 'Smith', 11, 6, null),
('Amanda', 'Grayson', 9, 4, 4661),
('James', 'Carson', 12, 6, null);
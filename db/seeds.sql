INSERT INTO department (department_name)
VALUES ('UX/UI'),
       ('Business Development'),
       ('Marketing');


INSERT INTO employee_roles (title, salary, department_id)
VALUES ('Sr. Vice President', 350000.00, 002),
       ('Sr. Director', 250000.00, 002),
       ('Director', 200000.00, 003),
       ('Project Manager', 150000.00, 001),
       ('Sr. Developer', 125000.00, 001),
       ('Jr. Associate', 75000.00, 003);

INSERT INTO employee_info (first_name, last_name, role_id)
VALUES ('Adam', 'Colin', 001),
       ('Barry', 'Badrinath', 002),
       ('Alicia', 'Thompson', 003),
       ('Kate', 'Henderson', 004),
       ('Himmy', 'Geraldson', 005),
       ('Austin', 'Powers', 006);


INSERT INTO employee_info (first_name, last_name, role_id, manager_id)
VALUES ('Adam', 'Colin', 001, 003);



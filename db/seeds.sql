INSERT INTO department (id, name)
VALUES (001, "UX/UI");
       (002, "Business Development");
       (003, "Marketing");




INSERT INTO employee_info (id, title, salary, department_id)
VALUES (001, "Sr. Vice President", 350000.00, 002),
       (002, "Sr. Director", 250000.00, 002),
       (003, "Director", 200000.00, 003),
       (004, "Project Manager", 150000.00, 001),
       (005, "Sr. Developer", 125000.00, 001),
       (006, "Jr. Associate", 75000.00, 003),



INSERT INTO employee_role (first_name, last_name, role_id, manager_id)
VALUES ("Adam", "Colin", 001, 001),
       ("Barry", "Badrinath", 006, NULL),
       ("Johnny", "Smith", 003, 003),
       ("Timmy", "Johnson", 004, 004),
       ("Alicia", "Thompson", 002, 002),
       ("Kate", "O'Leary", 005, NULL),
       ("Himmy", "Geraldson", 006, NULL),
       ("Austin", "Powers", 006, NULL),





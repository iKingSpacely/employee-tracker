UPDATE employee_info
SET role_id = ?
WHERE last_name = ?;

DELETE FROM department
WHERE id =?;

DELETE FROM roles
WHERE id =?;
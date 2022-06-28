INSERT INTO department (name)
VALUES 
('Sales'),
('Legal'),
('Engineering'),
('Finance');

INSERT INTO role (title,salary,department_id)
VALUES 
('Secretary',65000,1),
('Lawyer', 150000,2),
('Software Engineer', 130000,3),
('Accountant', 80000,4);


INSERT INTO employee (First_name,last_name,role_id,manager_id)
VALUES 
('Kunal','Singh',1, NULL),
('Malia', 'Lourd',2,NULL),
('Tom', 'Allen',3, ),
('Melissa', 'Rodriguez',4,NULL);


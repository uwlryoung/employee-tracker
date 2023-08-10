INSERT INTO departments (dept_name)
VALUES
  ('Marketing'),
  ('Finance'),
  ('Human Resources'),
  ('Production'),
  ('Development'),
  ('Quality Management'),
  ('Sales'),
  ('Research'),
  ('Customer Service');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Social Media Lead', 70000, 1),
  ('Finance Administrator', 100000, 2),
  ('HR Advisor', 125000, 3),
  ('Lead Technician', 120000, 4),
  ('Product Checker', 55000, 5),
  ('Senior Staff', 75000, 6),
  ('Research Assistant', 68000, 7),
  ('Senior Analyst', 90000, 8),
  ('Secretary', 70000, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Bezalel','Simmel',4,NULL),
  ('Parto','Bamford',2,NULL),
  ('Chirstian','Koblick',1,NULL),
  ('Kyoichi','Maliniak',6,NULL),
  ('Anneke','Preusig',1,1),
  ('Tzvetan','Zielin',2,2),
  ('Saniya','Kalloufi',3,3),
  ('Sumant','Peac',4,4),
  ('Duangkaew','Piveteau',5,1),
  ('Mary','Sluis',6,1),
  ('Patricio','Bridgland',7,2),
  ('Eberhardt','Terkki',8,2),
  ('Arif','Merlo',9,4),
  ('Bader','Swan',2,3);
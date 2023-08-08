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
  ('Program Coordinator', 80000, 1),
  ('Finance Administrator', 100000, 2),
  ('Section Lead', 75000, 2),
  ('HR Advisor', 125000, 3),
  ('Management', 85000, 3),
  ('Lead Technician', 120000, 4),
  ('Researcher', 65000, 4),
  ('Product Checker', 55000, 5),
  ('Line Manager', 60000, 5),
  ('Senior Staff', 750000, 6),
  ('Staff', 55000, 6),
  ('Research Assistant', 68000, 7),
  ('Entry Staff', 45000, 7),
  ('Senior Analyst', 90000, 8),
  ('Junior Analyst', 55000, 8),
  ('Front Desk', 60000, 9),
  ('Secretary', 70000, 9);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (1,'Bezalel','Simmel',4,NULL),
  (2,'Parto','Bamford',2,NULL),
  (3,'Chirstian','Koblick',1,NULL),
  (4,'Kyoichi','Maliniak',6,NULL);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (10006,'Anneke','Preusig',3,1),
  (10007,'Tzvetan','Zielin',2,2),
  (10008,'Saniya','Kalloufi',2,3),
  (10009,'Sumant','Peac',3,4),
  (10010,'Duangkaew','Piveteau',9,1),
  (10011,'Mary','Sluis',1,1),
  (10012,'Patricio','Bridgland',2,2),
  (10013,'Eberhardt','Terkki',1,2),
  (10014,'Berni','Genin',4,2),
  (10015,'Guoxiang','Nooteboom',5,1),
  (10016,'Kazuhito','Cappelletti',4,1),
  (10017,'Cristinel','Bouloucos',6,3),
  (10018,'Kazuhide','Peha',2,3),
  (10019,'Lillian','Haddadi',4,2),
  (10020,'Mayuko','Warwick',8,1),
  (10021,'Ramzi','Erde',2,4),
  (10022,'Shahaf','Famili',2,4),
  (10023,'Bojan','Montemayor',1,2),
  (10024,'Suzette','Pettey',8,2),
  (10025,'Prasadram','Heyers',9,2),
  (10026,'Yongqiao','Berztiss',4,2),
  (10027,'Divier','Reistad',7,2),
  (10028,'Domenick','Tempesti',8,1),
  (10029,'Otmar','Herbst',3,3),
  (10030,'Elvis','Demeyer',1,2),
  (10031,'Karsten','Joslin',4,2),
  (10032,'Jeong','Reistad',7,2),
  (10033,'Arif','Merlo',5,4),
  (10034,'Bader','Swan',2,3);
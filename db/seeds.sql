INSERT INTO department (dept_name)
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
  ('Senior Staff', 120000, 1),
  ('Staff', 80000, 1),
  ('Senior Staff', 120000, 2),
  ('Staff', 80000, 2),
  ('Senior Staff', 120000, 3),
  ('Staff', 80000, 3),
  ('Senior Staff', 120000, 4),
  ('Staff', 80000, 4),
  ('Senior Staff', 120000, 5),
  ('Staff', 80000, 5),
  ('Senior Staff', 120000, 6),
  ('Staff', 80000, 6),
  ('Senior Staff', 120000, 7),
  ('Staff', 80000, 7),
  ('Senior Staff', 120000, 8),
  ('Staff', 80000, 8),
  ('Senior Staff', 120000, 9),
  ('Staff', 80000, 9);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (1,'Bezalel','Simmel',4,NULL),
  (2,'Parto','Bamford',2,NULL),
  (3,'Chirstian','Koblick',1,NULL),
  (4,'Kyoichi','Maliniak',6,NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (10006,'Anneke','Preusig',3,1),
  (10007,'Tzvetan','Zielin',2,2),
  (10008,'Saniya','Kalloufi',2,3),
  (10009,'Sumant','Peac',3,4),
  (10010,'Duangkaew','Piveteau',9,1);
  -- (10011,'Mary','Sluis',1,9),
  -- (10012,'Patricio','Bridgland',2,8),
  -- (10013,'Eberhardt','Terkki',1,2),
  -- (10014,'Berni','Genin',4,2),
  -- (10015,'Guoxiang','Nooteboom',5,1),
  -- (10016,'Kazuhito','Cappelletti',4,1),
  -- (10017,'Cristinel','Bouloucos',6,7),
  -- (10018,'Kazuhide','Peha',2,3),
  -- (10019,'Lillian','Haddadi',4,6),
  -- (10020,'Mayuko','Warwick',8,6),
  -- (10021,'Ramzi','Erde',2,4),
  -- (10022,'Shahaf','Famili',2,5),
  -- (10023,'Bojan','Montemayor',1,6),
  -- (10024,'Suzette','Pettey',8,6),
  -- (10025,'Prasadram','Heyers',9,2),
  -- (10026,'Yongqiao','Berztiss',4,2),
  -- (10027,'Divier','Reistad',7,9),
  -- (10028,'Domenick','Tempesti',8,6),
  -- (10029,'Otmar','Herbst',3,4),
  -- (10030,'Elvis','Demeyer',1,2),
  -- (10031,'Karsten','Joslin',4,2),
  -- (10032,'Jeong','Reistad',7,8),
  -- (10033,'Arif','Merlo',5,6),
  -- (10034,'Bader','Swan',2,3);
	show databases;
	
	CREATE DATABASE testdb;

	use testdb;

	CREATE TABLE customers
	(id INT,
	name VARCHAR(200));
	
	INSERT INTO customers VALUES(101, 'Gautam');
	INSERT INTO customers VALUES(102, 'Shreya');
	INSERT INTO customers VALUES(103, 'King');
	INSERT INTO customers VALUES(104, 'Kochhar');
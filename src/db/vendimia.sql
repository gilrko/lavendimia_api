CREATE DATABASE vendimia;

USE vendimia;

create table user(
	id INT NOT NULL auto_increment,
	name varchar(45),
	lastname varchar(20),
    motherlastname varchar(20),
    rfc varchar(13),
    primary key(id)
    
);

create table articles(
	id INT NOT NULL auto_increment,
	description varchar(50),
	model varchar(20),
    stock int(5),
    price double,
    primary key(id)
    
);

create table sales(
	id INT NOT NULL auto_increment,
	total double,
	fecha date,
    status tinyint(1),
    clientid INT NOT NULL,
    primary key(id),
    foreign key(clientid) references user(id)
    
);


describe user;
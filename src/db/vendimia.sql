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

describe user;
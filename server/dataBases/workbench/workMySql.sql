#DROP DATABASE MERN;
create database MERN;
use MERN;

create table USERS (
		idUser INT AUTO_INCREMENT,
		userName VARCHAR(100),
		email VARCHAR(100),
        pass VARCHAR(100),
		PRIMARY KEY(idUser)
	);
    
INSERT INTO USERS VALUES (NULL, "Coke", "cokiño@gmail.com","1111");
INSERT INTO USERS VALUES (NULL, "Lylith", "lylith@gmail.com","2222");
INSERT INTO USERS VALUES (NULL, "Davinia", "Davinia@gmail.com","3333");

SELECT * FROM USERS;
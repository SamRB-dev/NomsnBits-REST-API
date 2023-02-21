-- MySQL

-- CREATE TABLE devs(

--     devID int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',

--     fullname VARCHAR(100) NOT NULL COMMENT 'Fullname',

--     joining_date DATE NOT NULL COMMENT 'Joining Time',

--     active BOOLEAN NOT NULL COMMENT 'Active status of the account',

--     apiKey TEXT COMMENT 'Randomly Generately Key'

-- ) DEFAULT CHARSET UTF8 COMMENT 'Devs';



-- PostgresSQL
CREATE TABLE devs (
    devID SERIAL NOT NULL PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    joining_date DATE NOT NULL,
    active BOOLEAN NOT NULL,
    apiKey TEXT
);
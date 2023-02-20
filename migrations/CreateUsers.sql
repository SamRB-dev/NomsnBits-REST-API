-- MySQL
-- CREATE TABLE users(  
--     user_id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
--     username VARCHAR(70) UNIQUE COMMENT 'Username',
--     email VARCHAR(100) COMMENT 'Email',
--     verified BOOLEAN NOT NULL DEFAULT 0 COMMENT 'Is the email verified?',
--     password TEXT COMMENT 'Password',
--     salt TEXT COMMENT 'Password Salts',
--     registration_date DATE COMMENT "Registration Date"
-- ) DEFAULT CHARSET UTF8;

-- PostgresSQL
CREATE TABLE users(  
    user_id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(70) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT 0,
    password TEXT NOT NULL,
    salt TEXT NOT NULL,
    registration_date DATE NOT NULL
);
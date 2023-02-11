CREATE TABLE users(  
    user_id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    username VARCHAR(70) COMMENT 'Username',
    email VARCHAR(100) COMMENT 'Email',
    password TEXT COMMENT 'Password',
    registration_date DATE COMMENT "Registration Date"
) DEFAULT CHARSET UTF8;
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    college_name VARCHAR(255),
    phone_number INT,
    PRIMARY KEY(id)
 );
 
 

 
 
 
 
CREATE TABLE posts(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
 );
 
 
 
 
 
 ALTER TABLE posts DROP date;
 
 
 
 
 ALTER TABLE posts MODIFY time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;


 
 

 
 
 
 

 
 
 

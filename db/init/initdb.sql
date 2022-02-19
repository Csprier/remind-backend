-- create user wiz with encrypted password 'wiz1337';
-- grant all privileges on database reminddb to wiz;
DROP TABLE IF EXISTS Greeting;
CREATE TABLE Greeting (
  id INT PRIMARY KEY, 
  message VARCHAR(64)
);

INSERT INTO Greeting 
VALUES (
  1, 
  'Welcome to RMNDR.'
);
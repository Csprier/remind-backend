create user wiz with encrypted password 'cloak';
grant all privileges on database remind_database to wiz;
CREATE TABLE Greeting(id INT PRIMARY KEY, message VARCHAR(64));
INSERT INTO
  Greeting (id, message)
VALUES
  (1, "Welcome to RMNDR.");
-- CREATE USER 'wiz'@'%' IDENTIFIED BY 'cloak';
GRANT ALL PRIVILEGES ON *.* TO 'wiz' @'%';
-- GRANT ALL PRIVILEGES ON *.* TO 'wiz' @'localhost';
FLUSH PRIVILEGES;
CREATE DATABASE IF NOT EXISTS masterydb;
USE masterydb;
CREATE TABLE IF NOT EXISTS Greeting(id INT PRIMARY KEY, message VARCHAR(64));
INSERT INTO
  Greeting (id, message)
VALUES
  (1, "Welcome to RMNDR.");
-- Fitnest MySQL Database Setup Script
-- Run this as MySQL root user: mysql -u root -p < setup-mysql-database.sql

-- Create database
CREATE DATABASE IF NOT EXISTS fitnest;
USE fitnest;

-- Create user and grant privileges
CREATE USER IF NOT EXISTS 'fitnest'@'localhost' IDENTIFIED BY 'fitnest123';
GRANT ALL PRIVILEGES ON fitnest.* TO 'fitnest'@'localhost';
FLUSH PRIVILEGES;

-- Verify
SELECT 'Database and user created successfully!' AS Status;
SHOW DATABASES LIKE 'fitnest';


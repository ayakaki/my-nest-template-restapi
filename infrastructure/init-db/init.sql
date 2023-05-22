CREATE USER 'user'@'%' IDENTIFIED BY 'P_ssw0rd';
GRANT ALL PRIVILEGES ON trial_db.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

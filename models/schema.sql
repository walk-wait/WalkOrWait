DROP DATABASE IF EXISTS route_db;

CREATE DATABASE route_db;

USE route_db;
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    passwords VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

/* user_id is the foreign key*/
CREATE TABLE bookmark (
	trip_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    depart_stop VARCHAR(45) NOT NULL,
    arrive_stop VARCHAR(45) NOT NULL,
    walk_time TIME NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_UsersId FOREIGN KEY (id)
    REFERENCES users(id)
    
);

/* stop_id, lon, lat, tag_id, specify no. of digits */

/* */
USE route_db;
CREATE TABLE map (
	id INT NOT NULL AUTO_INCREMENT,
    stop_id INT(4) NOT NULL,
    stop_title VARCHAR(100) NOT NULL,
    tag_id INT NOT NULL
);

/* we need direction for the route/bus*/
/* we need to discuss this table in more detail: */
CREATE TABLE routes (
	id INT NOT NULL AUTO_INCREMENT,
    bus_route VARCHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE stops (
	id INT NOT NULL AUTO_INCREMENT,
    tag_id INT(4) NOT NULL,
    lon DOUBLE NOT NULL,
    lat DOUBLE NOT NULL,
	CONSTRAINT FK_RouteId FOREIGN KEY (id)
    REFERENCES routes(id)
);


/*in seed.sql*/
INSERT INTO users(username, passwords) VALUES ("hxu", "123");
select * from users;
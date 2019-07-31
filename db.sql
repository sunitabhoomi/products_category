DROP DATABASE IF EXISTS  `sample`;
CREATE DATABASE `sample`;
USE `sample`;


CREATE TABLE `category` (
    `id` INT(11) NOT NULL AUTO_INCREMENT ,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

ALTER TABLE `category`
    MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

CREATE TABLE `products` (
    `id` INT(11) NOT NULL AUTO_INCREMENT ,
    `categoryId` INt(10) NOT NULL ,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(4000) NOT NULL,
    `uom` VARCHAR(255) NOT NULL,
    `preservationMethods` VARCHAR(255),
    `gst`  DOUBLE(10,2) NOT NULL,
    `isEnabled` BOOLEAN NOT NULL default '1',
    `createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

ALTER TABLE `products`
    MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,
    ADD CONSTRAINT `fk1_products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);

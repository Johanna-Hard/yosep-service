DROP DATABASE airbnb;
CREATE DATABASE airbnb;
USE airbnb;

CREATE TABLE `listing_header` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `reviewsUrl` VARCHAR(100) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `hostName` VARCHAR(100) NOT NULL,
  `hostRating` VARCHAR(100) NOT NULL,
  `roomInfo` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);
-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 10, 2018 at 09:24 PM
-- Server version: 5.6.37
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `JS_30_21`
--

-- --------------------------------------------------------

--
-- Table structure for table `age`
--

CREATE TABLE `age` (
  `id` int(11) NOT NULL,
  `age` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `age`
--

INSERT INTO `age` (`id`, `age`) VALUES
(1, 'puppy'),
(2, 'adult');

-- --------------------------------------------------------

--
-- Table structure for table `breed`
--

CREATE TABLE `breed` (
  `id` int(11) NOT NULL,
  `breed` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `breed`
--

INSERT INTO `breed` (`id`, `breed`) VALUES
(1, 'small'),
(2, 'medium'),
(3, 'large');

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `class` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `class`) VALUES
(1, 'ordinary'),
(2, 'premium'),
(3, 'luxe');

-- --------------------------------------------------------

--
-- Table structure for table `dog food`
--

CREATE TABLE `dog food` (
  `id` int(11) NOT NULL,
  `breed_id` int(11) NOT NULL,
  `age_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `weight_id` int(11) NOT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dog food`
--

INSERT INTO `dog food` (`id`, `breed_id`, `age_id`, `class_id`, `weight_id`, `price`) VALUES
(1, 1, 1, 2, 2, 700),
(2, 3, 2, 1, 5, 1000),
(3, 2, 2, 3, 3, 1500);

-- --------------------------------------------------------

--
-- Table structure for table `weight`
--

CREATE TABLE `weight` (
  `id` int(11) NOT NULL,
  `weight (kg)` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `weight`
--

INSERT INTO `weight` (`id`, `weight (kg)`) VALUES
(1, 1),
(2, 3),
(3, 10),
(4, 15),
(5, 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `age`
--
ALTER TABLE `age`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `breed`
--
ALTER TABLE `breed`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dog food`
--
ALTER TABLE `dog food`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `iddog food_UNIQUE` (`id`),
  ADD KEY `fk_age_idx` (`age_id`),
  ADD KEY `fk_breed_idx` (`breed_id`),
  ADD KEY `fk_class_idx` (`class_id`),
  ADD KEY `fk_weight_idx` (`weight_id`),
  ADD KEY `breed_id` (`breed_id`),
  ADD KEY `age_id` (`age_id`),
  ADD KEY `class_id` (`class_id`),
  ADD KEY `class_id_2` (`class_id`),
  ADD KEY `weight_id` (`weight_id`),
  ADD KEY `price` (`price`);

--
-- Indexes for table `weight`
--
ALTER TABLE `weight`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `age`
--
ALTER TABLE `age`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `breed`
--
ALTER TABLE `breed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `dog food`
--
ALTER TABLE `dog food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `weight`
--
ALTER TABLE `weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `breed`
--
ALTER TABLE `breed`
  ADD CONSTRAINT `breed_ibfk_1` FOREIGN KEY (`id`) REFERENCES `dog food` (`breed_id`);

--
-- Constraints for table `dog food`
--
ALTER TABLE `dog food`
  ADD CONSTRAINT `fk_age` FOREIGN KEY (`age_id`) REFERENCES `age` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_breed` FOREIGN KEY (`breed_id`) REFERENCES `breed` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_weight` FOREIGN KEY (`weight_id`) REFERENCES `weight` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

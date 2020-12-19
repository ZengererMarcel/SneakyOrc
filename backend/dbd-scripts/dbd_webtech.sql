-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 19. Dez 2020 um 22:14
-- Server-Version: 10.4.14-MariaDB
-- PHP-Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `dbd_webtech`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `departments`
--

CREATE TABLE `departments` (
  `department_id` int(11) NOT NULL,
  `department_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `departments`
--

INSERT INTO `departments` (`department_id`, `department_name`) VALUES
(5, 'CEO'),
(2, 'Einkauf'),
(4, 'IT'),
(1, 'Sekretariat'),
(3, 'Verkauf');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `birth_date` date NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `department_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `employee`
--

INSERT INTO `employee` (`employee_id`, `first_name`, `last_name`, `birth_date`, `phone_number`, `email`, `department_id`, `status_id`) VALUES
(1, 'Leon', 'Müller', '1988-03-17', '26', 'leon.müller@web.com', 2, 1),
(2, 'Hans', 'Müller', '1956-02-17', '110', 'hans.müller@web.com', 4, 2),
(3, 'Max', 'Güner', '1966-03-19', '14', 'max.güner@web.com', 5, 6),
(4, 'Mia', 'Meyer', '1971-07-09', '158', 'mia.meyer@web.com', 1, 2),
(5, 'Damn', 'Daniel', '1967-04-14', '096', 'damn.daniel@web.com', 3, 4),
(6, 'Sakia', 'Sehner', '1971-03-05', '13', 'sakia.sehner@web.com', 3, 3),
(7, 'Lukas', 'Kjeeli', '1980-03-28', '95', 'lukas.kjeeli@web.com', 2, 5),
(8, 'Kaja', 'Kummer', '1950-12-05', '58', 'kaja.kummer@web.com', 2, 1);

-- --------------------------------------------------------

--
-- Stellvertreter-Struktur des Views `employee_disp`
-- (Siehe unten für die tatsächliche Ansicht)
--
CREATE TABLE `employee_disp` (
`first_name` varchar(30)
,`last_name` varchar(30)
,`birth_date` date
,`phone_number` varchar(20)
,`email` varchar(50)
,`department_name` varchar(50)
,`status_description` varchar(50)
,`toDo_name` mediumtext
);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `persontodo`
--

CREATE TABLE `persontodo` (
  `employee_id` int(11) NOT NULL,
  `toDo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `persontodo`
--

INSERT INTO `persontodo` (`employee_id`, `toDo_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(3, 4),
(4, 6),
(5, 4),
(6, 4),
(7, 4),
(8, 10);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `status`
--

CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `status_description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `status`
--

INSERT INTO `status` (`status_id`, `status_description`) VALUES
(1, 'Anwesend'),
(6, 'Ausgeschieden'),
(2, 'Homeoffice'),
(3, 'Karenz'),
(5, 'Krank'),
(4, 'Urlaub');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `todo`
--

CREATE TABLE `todo` (
  `toDo_id` int(11) NOT NULL,
  `toDo_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `todo`
--

INSERT INTO `todo` (`toDo_id`, `toDo_name`) VALUES
(4, ''),
(3, 'Kundengespräche'),
(2, 'Marketing Meeting'),
(1, 'Meeting mit Mitarbeiter'),
(10, 'Telefonat mit Chefin'),
(6, 'Telefonate');

-- --------------------------------------------------------

--
-- Struktur des Views `employee_disp`
--
DROP TABLE IF EXISTS `employee_disp`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `employee_disp`  AS SELECT `a`.`first_name` AS `first_name`, `a`.`last_name` AS `last_name`, `a`.`birth_date` AS `birth_date`, `a`.`phone_number` AS `phone_number`, `a`.`email` AS `email`, `b`.`department_name` AS `department_name`, `c`.`status_description` AS `status_description`, group_concat(`e`.`toDo_name` separator ', ') AS `toDo_name` FROM ((((`employee` `a` join `departments` `b` on(`a`.`department_id` = `b`.`department_id`)) join `status` `c` on(`a`.`status_id` = `c`.`status_id`)) left join `persontodo` `d` on(`a`.`employee_id` = `d`.`employee_id`)) left join `todo` `e` on(`d`.`toDo_id` = `e`.`toDo_id`)) GROUP BY `a`.`employee_id` ;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`department_id`),
  ADD UNIQUE KEY `department_name` (`department_name`);

--
-- Indizes für die Tabelle `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indizes für die Tabelle `persontodo`
--
ALTER TABLE `persontodo`
  ADD KEY `persontodo_employee` (`employee_id`),
  ADD KEY `persontodo_todo` (`toDo_id`);

--
-- Indizes für die Tabelle `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`),
  ADD UNIQUE KEY `status_description` (`status_description`);

--
-- Indizes für die Tabelle `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`toDo_id`),
  ADD UNIQUE KEY `toDo_name` (`toDo_name`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `departments`
--
ALTER TABLE `departments`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT für Tabelle `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `status`
--
ALTER TABLE `status`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `todo`
--
ALTER TABLE `todo`
  MODIFY `toDo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`department_id`) REFERENCES `departments` (`department_id`);

--
-- Constraints der Tabelle `persontodo`
--
ALTER TABLE `persontodo`
  ADD CONSTRAINT `persontodo_employee` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  ADD CONSTRAINT `persontodo_todo` FOREIGN KEY (`toDo_id`) REFERENCES `todo` (`toDo_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

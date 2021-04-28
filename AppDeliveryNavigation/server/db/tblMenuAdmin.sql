CREATE TABLE `tblMenuAdmin` (
  `madAutoID` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `madName` VARCHAR(100) NOT NULL,
  `madPageName` VARCHAR(100) NOT NULL,
  `madIcon` CHAR(20) NOT NULL,
  `madOrder` INT(10) NOT NULL,
  `madStatus` TINYINT(1) NOT NULL DEFAULT '0',
   PRIMARY KEY (`madAutoID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `tblMenuAdmin` ADD UNIQUE(`madName`);

ALTER TABLE `tblMenuAdmin` ADD UNIQUE(`madPageName`);

INSERT INTO `tblMenuAdmin`(`madName`, `madPageName`, `madIcon`, `madOrder`, `madStatus`) VALUES
('User Permissions', 'user-permission', 'fa-users', 1, 0),
('User', 'user', 'fa-user', 2, 1),
('Admin Menu', 'menu', 'fa-bars', 3, 1);

CREATE TABLE `tblUserAdmin` (
  `usaAutoID` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `usaName` VARCHAR(100) NOT NULL,
  `usaEmail` VARCHAR(250) NOT NULL,
  `usaPhone` CHAR(20) NOT NULL,
  `usaPassword` VARCHAR(250) NOT NULL,
  `usaType` TINYINT(1) NOT NULL DEFAULT '0',
  `usaRegister` TINYINT(1) NOT NULL DEFAULT '0',
  `usaStatus` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`usaAutoID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `tblUserAdmin` ADD UNIQUE(`usaEmail`);

INSERT INTO `tblUserAdmin`(`usaName`, `usaEmail`, `usaPassword`, `usaType`, `usaStatus`) VALUES
('Administrator', 'admin@webbuilt.com', 'smey@admin.!!!.@@@.***', 1, 1);

-- Administrator Password is: smey@admin.!!!.@@@.***

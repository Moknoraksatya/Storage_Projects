CREATE TABLE `tblSeller` (
  `selAutoID` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `selStoreName` VARCHAR(250) NOT NULL,
  `selPhone` CHAR(20) NOT NULL,
  `selPassword` CHAR(250) NOT NULL,
  `selBankNumber` CHAR(250) NULL,
  `selBankName` CHAR(250) NULL,
  PRIMARY KEY (`selAutoID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

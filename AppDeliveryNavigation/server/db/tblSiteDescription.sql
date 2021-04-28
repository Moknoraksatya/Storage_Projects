CREATE TABLE `tblSiteDescription` (
  `sidAutoID` int(10) UNSIGNED NOT NULL,
  `sidID` int(10) UNSIGNED NOT NULL,
  `sidLang` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `sidSiteName` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `sidKeyword` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `sidCopyRight` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `sidReceiveEmail` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `sidPhone` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sidAddress` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `sidLogo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `sidAppVersion` decimal(10,2) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `tblSiteDescription`
  ADD PRIMARY KEY (`sidAutoID`),
  ADD UNIQUE KEY `LangUnique` (`sidID`,`sidLang`);

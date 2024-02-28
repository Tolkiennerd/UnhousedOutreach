ALTER TABLE `UnhousedOutreach`.`HousingInsecureNeighborFamilyMember` 
DROP FOREIGN KEY `fk_HousingInsecureNeighborFamily_LocationId`;
ALTER TABLE `UnhousedOutreach`.`HousingInsecureNeighborFamilyMember` 
DROP COLUMN `LocationId`,
DROP INDEX `fk_HousingInsecureNeighborFamily_LocationId_idx` ;
;


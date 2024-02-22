CREATE TABLE `UnhousedOutreach`.`Skill` (
  `SkillId` INT NOT NULL AUTO_INCREMENT,
  `Skill` VARCHAR(45) NOT NULL,
  `OutreachTeamId` INT NOT NULL,
  PRIMARY KEY (`SkillId`),
  INDEX `fk_Skill_OutreachTeamId_idx` (`OutreachTeamId` ASC) VISIBLE,
  CONSTRAINT `fk_Skill_OutreachTeamId`
    FOREIGN KEY (`OutreachTeamId`)
    REFERENCES `UnhousedOutreach`.`OutreachTeam` (`OutreachTeamId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
CREATE TABLE `UnhousedOutreach`.`HousingInsecureNeighborSkill` (
  `HousingInsecureNeighborId` INT NOT NULL,
  `SkillId` INT NOT NULL,
  `OutreachTeamId` INT NOT NULL,
  INDEX `fk_HousingInsecureNeighborSkill_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId` ASC) VISIBLE,
  INDEX `fk_HousingInsecureNeighborSkill_SkillId_idx` (`SkillId` ASC) VISIBLE,
  INDEX `fk_HousingInsecureNeighborSkill_OutreachTeamId_idx` (`OutreachTeamId` ASC) VISIBLE,
  CONSTRAINT `fk_HousingInsecureNeighborSkill_HousingInsecureNeighborId`
    FOREIGN KEY (`HousingInsecureNeighborId`)
    REFERENCES `UnhousedOutreach`.`HousingInsecureNeighbor` (`HousingInsecureNeighborId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_HousingInsecureNeighborSkill_SkillId`
    FOREIGN KEY (`SkillId`)
    REFERENCES `UnhousedOutreach`.`Skill` (`SkillId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_HousingInsecureNeighborSkill_OutreachTeamId`
    FOREIGN KEY (`OutreachTeamId`)
    REFERENCES `UnhousedOutreach`.`OutreachTeam` (`OutreachTeamId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

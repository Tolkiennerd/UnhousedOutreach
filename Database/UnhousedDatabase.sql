-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: unhousedoutreach
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `casemanager`
--

DROP TABLE IF EXISTS `casemanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `casemanager` (
  `CaseManagerId` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `PreferredName` varchar(45) DEFAULT NULL,
  `GenderId` int DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `SupportServiceOrganizationId` int DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`CaseManagerId`),
  KEY `fk_CaseManager_SupportServiceOrganizationId_idx` (`SupportServiceOrganizationId`),
  KEY `fk_CaseManager_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_CaseManager_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`),
  CONSTRAINT `fk_CaseManager_SupportServiceOrganizationId` FOREIGN KEY (`SupportServiceOrganizationId`) REFERENCES `supportserviceorganization` (`SupportServiceOrganizationId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `casemanager`
--

LOCK TABLES `casemanager` WRITE;
/*!40000 ALTER TABLE `casemanager` DISABLE KEYS */;
INSERT INTO `casemanager` VALUES (2,'Case','Manager',NULL,0,NULL,'123-456-7890',NULL,NULL,1);
/*!40000 ALTER TABLE `casemanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cushioncondition`
--

DROP TABLE IF EXISTS `cushioncondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cushioncondition` (
  `CushionConditionId` int NOT NULL AUTO_INCREMENT,
  `CushionCondition` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`CushionConditionId`),
  KEY `fk_CushionCondition_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_CushionCondition_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cushioncondition`
--

LOCK TABLES `cushioncondition` WRITE;
/*!40000 ALTER TABLE `cushioncondition` DISABLE KEYS */;
INSERT INTO `cushioncondition` VALUES (1,'New',1),(2,'Ripped',1),(3,'Wet',1),(4,'Filthy',1),(5,'Gently Used',1),(6,'Moderately Used',1);
/*!40000 ALTER TABLE `cushioncondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cushiontype`
--

DROP TABLE IF EXISTS `cushiontype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cushiontype` (
  `CushionTypeId` int NOT NULL AUTO_INCREMENT,
  `CushionType` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`CushionTypeId`),
  KEY `fk_CushionType_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_CushionType_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cushiontype`
--

LOCK TABLES `cushiontype` WRITE;
/*!40000 ALTER TABLE `cushiontype` DISABLE KEYS */;
INSERT INTO `cushiontype` VALUES (1,'Twin Mattress',1),(2,'Full Mattress',1),(3,'Cot',1),(4,'Foam',1),(5,'Sleeping Pad',1),(6,'Air Mattress',1),(7,'Carpet',1);
/*!40000 ALTER TABLE `cushiontype` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `englishlevel`
--

DROP TABLE IF EXISTS `englishlevel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `englishlevel` (
  `EnglishLevelId` int NOT NULL AUTO_INCREMENT,
  `EnglishLevel` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`EnglishLevelId`),
  KEY `fk_EnglishLevel_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_EnglishLevel_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `englishlevel`
--

LOCK TABLES `englishlevel` WRITE;
/*!40000 ALTER TABLE `englishlevel` DISABLE KEYS */;
INSERT INTO `englishlevel` VALUES (1,'No English',1),(2,'Some Words',1),(3,'Conversational',1),(4,'Fluent/First Language',1);
/*!40000 ALTER TABLE `englishlevel` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `disability`
--

DROP TABLE IF EXISTS `disability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disability` (
  `DisabilityId` int NOT NULL AUTO_INCREMENT,
  `Disability` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`DisabilityId`),
  KEY `fk_Disability_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Disability_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disability`
--

LOCK TABLES `disability` WRITE;
/*!40000 ALTER TABLE `disability` DISABLE KEYS */;
INSERT INTO `disability` VALUES (1,'Alcoholism',1),(2,'Drug Addiction',1),(3,'HIV',1),(4,'PTSD',1),(5,'Blindness',1),(6,'Deafness',1),(7,'Amputation',1),(8,'Depression',1),(9,'Diabetes',1),(10,'Anxiety',1),(11,'OCD',1),(12,'Eating Disorder',1),(13,'Schizophrenia',1),(14,'Bipolar Disorder',1),(15,'Skin Condition',1),(16,'Tourette\'s Syndrome',1),(17,'Vertigo',1),(18,'Heart Condition',1),(19,'Paraplegia',1),(20,'ADHD',1),(21,'Autism',1),(22,'Sleeping Disorder',1);
/*!40000 ALTER TABLE `disability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ethnicity`
--

DROP TABLE IF EXISTS `ethnicity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ethnicity` (
  `EthnicityId` int NOT NULL AUTO_INCREMENT,
  `Ethnicity` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`EthnicityId`),
  KEY `fk_Ethnicity_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Ethnicity_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ethnicity`
--

LOCK TABLES `ethnicity` WRITE;
/*!40000 ALTER TABLE `ethnicity` DISABLE KEYS */;
INSERT INTO `ethnicity` VALUES (1,'White',1),(2,'Black',1),(3,'Hispanic',1),(4,'Asian',1),(5,'Native American',1),(6,'Pacific Islander',1);
/*!40000 ALTER TABLE `ethnicity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender` (
  `GenderId` int NOT NULL AUTO_INCREMENT,
  `Gender` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`GenderId`),
  KEY `fk_Gender_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Gender_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'Male',1),(2,'Female',1),(3,'Non-Binary',1),(4,'Other',1);
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housinginsecureneighbor`
--

DROP TABLE IF EXISTS `housinginsecureneighbor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housinginsecureneighbor` (
  `HousingInsecureNeighborId` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `PreferredName` varchar(45) DEFAULT NULL,
  `DateOfBirth` datetime DEFAULT NULL,
  `GenderId` int DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `HousingStatusId` int DEFAULT NULL,
  `IsHoused` tinyint DEFAULT NULL,
  `IsVeteran` tinyint DEFAULT NULL,
  `HasIdentification` tinyint DEFAULT NULL,
  `IsCitizen` tinyint DEFAULT NULL,
  `CoatOrJacketCount` int DEFAULT NULL,
  `ShirtSizeId` int DEFAULT NULL,
  `ShoeSizeId` int DEFAULT NULL,
  `PantsSizeId` int DEFAULT NULL,
  `CaseManagerId` int DEFAULT NULL,
  `LocationId` int DEFAULT NULL,
  `DesiredLocationId` int DEFAULT NULL,
  `CushionTypeId` int DEFAULT NULL,
  `CushionConditionId` int DEFAULT NULL,
  `BlanketCount` int DEFAULT NULL,
  `HasSleepingBag` tinyint DEFAULT NULL,
  `SleepingBagConditionId` int DEFAULT NULL,
  `SleepingBagTemperatureThresholdFahrenheit` int DEFAULT NULL,
  `englishlevel` int DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighbor_GenderId_idx` (`GenderId`),
  KEY `fk_HousingInsecureNeighbor_HousingStatusId_idx` (`HousingStatusId`),
  KEY `fk_HousingInsecureNeighbor_LocationId_idx` (`LocationId`),
  KEY `fk_HousingInsecureNeighbor_DesiredLocationId_idx` (`DesiredLocationId`),
  KEY `fk_HousingInsecureNeighbor_CaseManagerId_idx` (`CaseManagerId`),
  KEY `fk_HousingInsecureNeighbor_ShirtSizeId_idx` (`ShirtSizeId`),
  KEY `fk_HousingInsecureNeighbor_PantsSizeId_idx` (`PantsSizeId`),
  KEY `fk_HousingInsecureNeighbor_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_CaseManagerId` FOREIGN KEY (`CaseManagerId`) REFERENCES `casemanager` (`CaseManagerId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_DesiredLocationId` FOREIGN KEY (`DesiredLocationId`) REFERENCES `location` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_GenderId` FOREIGN KEY (`GenderId`) REFERENCES `gender` (`GenderId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_HousingStatusId` FOREIGN KEY (`HousingStatusId`) REFERENCES `housingstatus` (`HousingStatusId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `location` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_PantsSizeId` FOREIGN KEY (`PantsSizeId`) REFERENCES `pantssize` (`PantsSizeId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_ShirtSizeId` FOREIGN KEY (`ShirtSizeId`) REFERENCES `shirtsize` (`ShirtSizeId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housinginsecureneighbor`
--

LOCK TABLES `housinginsecureneighbor` WRITE;
/*!40000 ALTER TABLE `housinginsecureneighbor` DISABLE KEYS */;
INSERT INTO `housinginsecureneighbor` VALUES (2,'John','Smith','Johnny','1990-01-22 18:47:07',1,'234-567-8902','john@gmail.com',1,0,0,1,1,2,1,1,1,2,1,1,1,1,2,1,1,10,_binary 'first guy',1),(3,'Greg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,1),(4,'Joey','Jones',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2);
/*!40000 ALTER TABLE `housinginsecureneighbor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housinginsecureneighbordisability`
--

DROP TABLE IF EXISTS `housinginsecureneighbordisability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housinginsecureneighbordisability` (
  `HousingInsecureNeighborId` int NOT NULL,
  `DisabilityId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborDisability_HousingInsecureNeighbo_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborDisability_DisabilityId_idx` (`DisabilityId`),
  KEY `fk_HousingInsecureNeighborDisability_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_DisabilityId` FOREIGN KEY (`DisabilityId`) REFERENCES `disability` (`DisabilityId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housinginsecureneighbordisability`
--

LOCK TABLES `housinginsecureneighbordisability` WRITE;
/*!40000 ALTER TABLE `housinginsecureneighbordisability` DISABLE KEYS */;
INSERT INTO `housinginsecureneighbordisability` VALUES (3,1,1),(3,2,1);
/*!40000 ALTER TABLE `housinginsecureneighbordisability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housinginsecureneighborethnicity`
--

DROP TABLE IF EXISTS `housinginsecureneighborethnicity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housinginsecureneighborethnicity` (
  `HousingInsecureNeighborId` int NOT NULL,
  `EthnicityId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_Ethnicity_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborEthnicity_EthnicityId_idx` (`EthnicityId`),
  KEY `fk_HousingInsecureNeighborEthnicity_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Ethnicity_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborEthnicity_EthnicityId` FOREIGN KEY (`EthnicityId`) REFERENCES `ethnicity` (`EthnicityId`),
  CONSTRAINT `fk_HousingInsecureNeighborEthnicity_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housinginsecureneighborethnicity`
--

LOCK TABLES `housinginsecureneighborethnicity` WRITE;
/*!40000 ALTER TABLE `housinginsecureneighborethnicity` DISABLE KEYS */;
INSERT INTO `housinginsecureneighborethnicity` VALUES (3,3,1),(4,4,2),(2,1,1),(2,4,1),(2,5,1);
/*!40000 ALTER TABLE `housinginsecureneighborethnicity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housinginsecureneighborfamilymember`
--

DROP TABLE IF EXISTS `housinginsecureneighborfamilymember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housinginsecureneighborfamilymember` (
  `HousingInsecureNeighborFamilyMemberId` int NOT NULL AUTO_INCREMENT,
  `HousingInsecureNeighborId` int NOT NULL,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `PreferredName` varchar(45) DEFAULT NULL,
  `RelationshipToNeighbor` enum('Undefined','Child','Parent','Sibling','Cousin','AuntOrUncle','Grandparent','Grandchild','NieceOrNephew','Other') NOT NULL,
  `GenderId` int DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `IsHoused` tinyint DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`HousingInsecureNeighborFamilyMemberId`),
  KEY `fk_HousingInsecureNeighborFamily_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborFamily_GenderId_idx` (`GenderId`),
  KEY `fk_HousingInsecureNeighborFamilyMember_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_GenderId` FOREIGN KEY (`GenderId`) REFERENCES `gender` (`GenderId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamilyMember_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housinginsecureneighborfamilymember`
--

LOCK TABLES `housinginsecureneighborfamilymember` WRITE;
/*!40000 ALTER TABLE `housinginsecureneighborfamilymember` DISABLE KEYS */;
INSERT INTO `housinginsecureneighborfamilymember` VALUES (1,3,'Bob','Smith','Bobby','Parent',1,'456-789-0123','bob@gmail.com',1,_binary 'testing',1);
/*!40000 ALTER TABLE `housinginsecureneighborfamilymember` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housinginsecureneighborneed`
--

DROP TABLE IF EXISTS `housinginsecureneighborneed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housinginsecureneighborneed` (
  `HousingInsecureNeighborId` int NOT NULL,
  `NeedId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborNeed_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborNeed_OutreachTeamId_idx` (`OutreachTeamId`),
  KEY `fk_HousingInsecureNeighborNeed_NeedId_idx` (`NeedId`),
  CONSTRAINT `fk_HousingInsecureNeighborNeed_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborNeed_NeedId` FOREIGN KEY (`NeedId`) REFERENCES `need` (`NeedId`),
  CONSTRAINT `fk_HousingInsecureNeighborNeed_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housinginsecureneighborneed`
--

LOCK TABLES `housinginsecureneighborneed` WRITE;
/*!40000 ALTER TABLE `housinginsecureneighborneed` DISABLE KEYS */;
INSERT INTO `housinginsecureneighborneed` VALUES (3,1,1),(3,2,1);
/*!40000 ALTER TABLE `housinginsecureneighborneed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housinginsecureneighborskill`
--

DROP TABLE IF EXISTS `housinginsecureneighborskill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housinginsecureneighborskill` (
  `HousingInsecureNeighborId` int NOT NULL,
  `SkillId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborSkill_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborSkill_SkillId_idx` (`SkillId`),
  KEY `fk_HousingInsecureNeighborSkill_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborSkill_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborSkill_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborSkill_SkillId` FOREIGN KEY (`SkillId`) REFERENCES `skill` (`SkillId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housinginsecureneighborskill`
--

LOCK TABLES `housinginsecureneighborskill` WRITE;
/*!40000 ALTER TABLE `housinginsecureneighborskill` DISABLE KEYS */;
/*!40000 ALTER TABLE `housinginsecureneighborskill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housinginsecureneighbortent`
--

DROP TABLE IF EXISTS `housinginsecureneighbortent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housinginsecureneighbortent` (
  `HousingInsecureNeighborId` int NOT NULL,
  `TentId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborTent_TentId_idx` (`TentId`),
  KEY `fk_HousingInsecureNeighborTent_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborTent_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_TentId` FOREIGN KEY (`TentId`) REFERENCES `tent` (`TentId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housinginsecureneighbortent`
--

LOCK TABLES `housinginsecureneighbortent` WRITE;
/*!40000 ALTER TABLE `housinginsecureneighbortent` DISABLE KEYS */;
INSERT INTO `housinginsecureneighbortent` VALUES (2,2,1);
/*!40000 ALTER TABLE `housinginsecureneighbortent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housingstatus`
--

DROP TABLE IF EXISTS `housingstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housingstatus` (
  `HousingStatusId` int NOT NULL AUTO_INCREMENT,
  `HousingStatus` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`HousingStatusId`),
  KEY `fk_HousingStatus_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingStatus_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housingstatus`
--

LOCK TABLES `housingstatus` WRITE;
/*!40000 ALTER TABLE `housingstatus` DISABLE KEYS */;
INSERT INTO `housingstatus` VALUES (1,'Not in system',1),(2,'No housing plan',1),(3,'Has housing plan',1),(4,'Is housed',1);
/*!40000 ALTER TABLE `housingstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `housingstatushistory`
--

DROP TABLE IF EXISTS `housingstatushistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `housingstatushistory` (
  `HousingInsecureNeighborId` int NOT NULL,
  `HousingStatusId` int NOT NULL,
  `FirstRecorded` date NOT NULL,
  KEY `fk_HousingStatusHistory_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingStatusHistory_HousingStatusId_idx` (`HousingStatusId`),
  CONSTRAINT `fk_HousingStatusHistory_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingStatusHistory_HousingStatusId` FOREIGN KEY (`HousingStatusId`) REFERENCES `housingstatus` (`HousingStatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `housingstatushistory`
--

LOCK TABLES `housingstatushistory` WRITE;
/*!40000 ALTER TABLE `housingstatushistory` DISABLE KEYS */;
INSERT INTO `housingstatushistory` VALUES (2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-13'),(2,1,'2024-04-21'),(2,1,'2024-04-21'),(2,1,'2024-04-21'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25');
/*!40000 ALTER TABLE `housingstatushistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ishousedhistory`
--

DROP TABLE IF EXISTS `ishousedhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ishousedhistory` (
  `HousingInsecureNeighborId` int NOT NULL,
  `IsHoused` tinyint NOT NULL,
  `FirstRecorded` date NOT NULL,
  KEY `fk_IsUnhousedHistory_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_IsUnhousedHistory_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ishousedhistory`
--

LOCK TABLES `ishousedhistory` WRITE;
/*!40000 ALTER TABLE `ishousedhistory` DISABLE KEYS */;
INSERT INTO `ishousedhistory` VALUES (2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-10'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-11'),(2,0,'2024-04-13'),(2,0,'2024-04-21'),(2,0,'2024-04-21'),(2,0,'2024-04-21'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25'),(2,0,'2024-04-25');
/*!40000 ALTER TABLE `ishousedhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `LocationId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `LocationTypeId` int NOT NULL,
  `Latitude` decimal(8,6) DEFAULT NULL,
  `Longitude` decimal(9,6) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `City` varchar(45) NOT NULL,
  `State` enum('Undefined','AL','AK','AZ','AR','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN','IA','KS','KT','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY') NOT NULL,
  `ZipCode` varchar(10) DEFAULT NULL,
  `IsLegal` tinyint DEFAULT NULL,
  `ArrivalDate` date DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`LocationId`),
  KEY `fk_Location_LocationTypeId_idx` (`LocationTypeId`),
  KEY `fk_Location_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Location_LocationTypeId` FOREIGN KEY (`LocationTypeId`) REFERENCES `locationtype` (`LocationTypeId`),
  CONSTRAINT `fk_Location_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,NULL,1,38.951500,-77.348700,NULL,'Reston','VA','20190',0,NULL,NULL,1),(2,NULL,2,38.951600,-77.348800,NULL,'Reston','UT','20190',1,NULL,NULL,1),(3,NULL,3,38.951700,-77.348900,NULL,'Reston','UT','20190',1,NULL,NULL,2);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locationhistory`
--

DROP TABLE IF EXISTS `locationhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locationhistory` (
  `HousingInsecureNeighborId` int NOT NULL,
  `LocationId` int NOT NULL,
  `FirstRecordedDate` date NOT NULL,
  KEY `fk_LocationHistory_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_LocationHistory_LocationId_idx` (`LocationId`),
  CONSTRAINT `fk_LocationHistory_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `housinginsecureneighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_LocationHistory_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `location` (`LocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locationhistory`
--

LOCK TABLES `locationhistory` WRITE;
/*!40000 ALTER TABLE `locationhistory` DISABLE KEYS */;
INSERT INTO `locationhistory` VALUES (2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-10'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-11'),(2,1,'2024-04-13'),(2,1,'2024-04-21'),(2,1,'2024-04-21'),(2,1,'2024-04-21'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25'),(2,1,'2024-04-25');
/*!40000 ALTER TABLE `locationhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locationtype`
--

DROP TABLE IF EXISTS `locationtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locationtype` (
  `LocationTypeId` int NOT NULL AUTO_INCREMENT,
  `LocationType` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`LocationTypeId`),
  KEY `fk_LocationType_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_LocationType_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locationtype`
--

LOCK TABLES `locationtype` WRITE;
/*!40000 ALTER TABLE `locationtype` DISABLE KEYS */;
INSERT INTO `locationtype` VALUES (1,'Tent',1),(2,'Car',1),(3,'Bus Stop',1),(4,'Shelter',1),(5,'Nothing',1),(6,'Apartment',1),(7,'House',1);
/*!40000 ALTER TABLE `locationtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `need`
--

DROP TABLE IF EXISTS `need`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `need` (
  `NeedId` int NOT NULL AUTO_INCREMENT,
  `Need` varchar(45) NOT NULL,
  `OutreachTeamid` int NOT NULL,
  PRIMARY KEY (`NeedId`),
  KEY `fk_Need_OutreachTeamId_idx` (`OutreachTeamid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `need`
--

LOCK TABLES `need` WRITE;
/*!40000 ALTER TABLE `need` DISABLE KEYS */;
INSERT INTO `need` VALUES (1,'Tent',1),(2,'Cushion',1),(3,'Sleeping Bag',1),(4,'Blanket',1),(5,'Tarp',1),(6,'Coat',1),(7,'Jacket',1),(8,'Gloves',1),(9,'Socks',1);
/*!40000 ALTER TABLE `need` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outreachteam`
--

DROP TABLE IF EXISTS `outreachteam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outreachteam` (
  `OutreachTeamId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outreachteam`
--

LOCK TABLES `outreachteam` WRITE;
/*!40000 ALTER TABLE `outreachteam` DISABLE KEYS */;
INSERT INTO `outreachteam` VALUES (1,'test team 1'),(2,'test team 2');
/*!40000 ALTER TABLE `outreachteam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pantssize`
--

DROP TABLE IF EXISTS `pantssize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pantssize` (
  `PantsSizeId` int NOT NULL AUTO_INCREMENT,
  `PantsSize` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int DEFAULT NULL,
  PRIMARY KEY (`PantsSizeId`),
  KEY `fk_PantsSize_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_PantsSize_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pantssize`
--

LOCK TABLES `pantssize` WRITE;
/*!40000 ALTER TABLE `pantssize` DISABLE KEYS */;
INSERT INTO `pantssize` VALUES (1,'Men\'s XS',1),(2,'Men\'s S',1),(3,'Men\'s M',1);
/*!40000 ALTER TABLE `pantssize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shirtsize`
--

DROP TABLE IF EXISTS `shirtsize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shirtsize` (
  `ShirtSizeId` int NOT NULL AUTO_INCREMENT,
  `ShirtSize` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`ShirtSizeId`),
  KEY `fk_ShirtSize_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_ShirtSize_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shirtsize`
--

LOCK TABLES `shirtsize` WRITE;
/*!40000 ALTER TABLE `shirtsize` DISABLE KEYS */;
INSERT INTO `shirtsize` VALUES (1,'Women\'s XS',1),(2,'Women\'s S',1),(3,'Women\'s M',1),(4,'Women\'s L',1),(5,'Women\'s XL',1),(6,'Women\'s XXL',1),(7,'Women\'s XXXL',1),(8,'Men\'s XS',1),(9,'Men\'s S',1),(10,'Men\'s M',1),(11,'Men\'s L',1),(12,'Men\'s XL',1),(13,'Men\'s XXL',1),(14,'Men\'s XXXL',1);
/*!40000 ALTER TABLE `shirtsize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoesize`
--

DROP TABLE IF EXISTS `shoesize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoesize` (
  `ShoeSizeId` int NOT NULL AUTO_INCREMENT,
  `ShoeSize` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`ShoeSizeId`),
  KEY `fk_ShoeSize_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_ShoeSize_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoesize`
--

LOCK TABLES `shoesize` WRITE;
/*!40000 ALTER TABLE `shoesize` DISABLE KEYS */;
INSERT INTO `shoesize` VALUES (1,'Men\'s 6',1),(2,'Men\'s 6.5',1),(3,'Men\'s 7',1),(4,'Men\'s 7.5',1),(5,'Men\'s 8',1);
/*!40000 ALTER TABLE `shoesize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill` (
  `SkillId` int NOT NULL AUTO_INCREMENT,
  `Skill` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`SkillId`),
  KEY `fk_Skill_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Skill_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sleepingbagcondition`
--

DROP TABLE IF EXISTS `sleepingbagcondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sleepingbagcondition` (
  `SleepingBagConditionId` int NOT NULL AUTO_INCREMENT,
  `SleepingBagCondition` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`SleepingBagConditionId`),
  KEY `fk_SleepingBagCondition_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_SleepingBagCondition_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sleepingbagcondition`
--

LOCK TABLES `sleepingbagcondition` WRITE;
/*!40000 ALTER TABLE `sleepingbagcondition` DISABLE KEYS */;
INSERT INTO `sleepingbagcondition` VALUES (1,'New',1),(2,'Gently Used',1),(3,'Moderately Used',1),(4,'Ripped',1),(5,'Wet',1),(6,'Filthy',1),(7,'Broken Zipper',1);
/*!40000 ALTER TABLE `sleepingbagcondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supportserviceorganization`
--

DROP TABLE IF EXISTS `supportserviceorganization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supportserviceorganization` (
  `SupportServiceOrganizationId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`SupportServiceOrganizationId`),
  KEY `fk_SupportServiceOrganization_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_SupportServiceOrganization_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supportserviceorganization`
--

LOCK TABLES `supportserviceorganization` WRITE;
/*!40000 ALTER TABLE `supportserviceorganization` DISABLE KEYS */;
/*!40000 ALTER TABLE `supportserviceorganization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tent`
--

DROP TABLE IF EXISTS `tent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tent` (
  `TentId` int NOT NULL AUTO_INCREMENT,
  `LocationId` int NOT NULL,
  `PersonSize` int DEFAULT NULL,
  `TentConditionId` int DEFAULT NULL,
  `TarpCount` int DEFAULT NULL,
  `TentUsageId` int DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`TentId`),
  KEY `fk_Tent_LocationId_idx` (`LocationId`),
  KEY `fk_Tent_TentConditionId_idx` (`TentConditionId`),
  KEY `fk_Tent_TentUsageId_idx` (`TentUsageId`),
  KEY `fk_Tent_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Tent_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `location` (`LocationId`),
  CONSTRAINT `fk_Tent_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`),
  CONSTRAINT `fk_Tent_TentConditionId` FOREIGN KEY (`TentConditionId`) REFERENCES `tentcondition` (`TentConditionId`),
  CONSTRAINT `fk_Tent_TentUsageId` FOREIGN KEY (`TentUsageId`) REFERENCES `tentusage` (`TentUsageId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tent`
--

LOCK TABLES `tent` WRITE;
/*!40000 ALTER TABLE `tent` DISABLE KEYS */;
INSERT INTO `tent` VALUES (2,1,4,NULL,2,1,_binary 'first tent',1);
/*!40000 ALTER TABLE `tent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tentcondition`
--

DROP TABLE IF EXISTS `tentcondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tentcondition` (
  `TentConditionId` int NOT NULL AUTO_INCREMENT,
  `TentCondition` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`TentConditionId`),
  KEY `fk_TentCondition_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_TentCondition_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tentcondition`
--

LOCK TABLES `tentcondition` WRITE;
/*!40000 ALTER TABLE `tentcondition` DISABLE KEYS */;
INSERT INTO `tentcondition` VALUES (1,'New',1),(2,'Gently Used',1),(3,'Moderately Used',1),(4,'Broken Zipper',1),(5,'Torn',1),(6,'No Rainfly',1),(7,'Collapsed',1),(8,'Broken Pole(s)',1);
/*!40000 ALTER TABLE `tentcondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tentusage`
--

DROP TABLE IF EXISTS `tentusage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tentusage` (
  `TentUsageId` int NOT NULL AUTO_INCREMENT,
  `TentUsage` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`TentUsageId`),
  KEY `fk_TentUsage_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_TentUsage_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tentusage`
--

LOCK TABLES `tentusage` WRITE;
/*!40000 ALTER TABLE `tentusage` DISABLE KEYS */;
INSERT INTO `tentusage` VALUES (1,'Permanent Residence',1),(2,'Occasional Residence',1),(3,'Storage',1),(4,'Vacant',1);
/*!40000 ALTER TABLE `tentusage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserId` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  `IsAdmin` tinyint NOT NULL DEFAULT '0',
  `TableRead` tinyint NOT NULL DEFAULT '0',
  `TableWrite` tinyint NOT NULL DEFAULT '0',
  `MapRead` tinyint NOT NULL DEFAULT '0',
  `MapWrite` tinyint NOT NULL DEFAULT '0',
  `EmailAddress` varchar(45) NOT NULL,
  PRIMARY KEY (`UserId`),
  KEY `fk_User_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_User_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `outreachteam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-03 16:14:11

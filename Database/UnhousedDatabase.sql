-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: UnhousedOutreach
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

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
-- Table structure for table `CaseManager`
--

DROP TABLE IF EXISTS `CaseManager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CaseManager` (
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
  CONSTRAINT `fk_CaseManager_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`),
  CONSTRAINT `fk_CaseManager_SupportServiceOrganizationId` FOREIGN KEY (`SupportServiceOrganizationId`) REFERENCES `SupportServiceOrganization` (`SupportServiceOrganizationId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CaseManager`
--

LOCK TABLES `CaseManager` WRITE;
/*!40000 ALTER TABLE `CaseManager` DISABLE KEYS */;
INSERT INTO `CaseManager` VALUES (2,'Case','Manager',NULL,0,NULL,'123-456-7890',NULL,NULL,1);
/*!40000 ALTER TABLE `CaseManager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CushionCondition`
--

DROP TABLE IF EXISTS `CushionCondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CushionCondition` (
  `CushionConditionId` int NOT NULL AUTO_INCREMENT,
  `CushionCondition` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`CushionConditionId`),
  KEY `fk_CushionCondition_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_CushionCondition_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CushionCondition`
--

LOCK TABLES `CushionCondition` WRITE;
/*!40000 ALTER TABLE `CushionCondition` DISABLE KEYS */;
INSERT INTO `CushionCondition` VALUES (1,'New',1),(2,'Ripped',1),(3,'Wet',1),(4,'Filthy',1),(5,'Gently Used',1),(6,'Moderately Used',1);
/*!40000 ALTER TABLE `CushionCondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CushionType`
--

DROP TABLE IF EXISTS `CushionType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CushionType` (
  `CushionTypeId` int NOT NULL AUTO_INCREMENT,
  `CushionType` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`CushionTypeId`),
  KEY `fk_CushionType_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_CushionType_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CushionType`
--

LOCK TABLES `CushionType` WRITE;
/*!40000 ALTER TABLE `CushionType` DISABLE KEYS */;
INSERT INTO `CushionType` VALUES (1,'Twin Mattress',1),(2,'Full Mattress',1),(3,'Cot',1),(4,'Foam',1),(5,'Sleeping Pad',1),(6,'Air Mattress',1),(7,'Carpet',1);
/*!40000 ALTER TABLE `CushionType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Disability`
--

DROP TABLE IF EXISTS `Disability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Disability` (
  `DisabilityId` int NOT NULL AUTO_INCREMENT,
  `Disability` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`DisabilityId`),
  KEY `fk_Disability_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Disability_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Disability`
--

LOCK TABLES `Disability` WRITE;
/*!40000 ALTER TABLE `Disability` DISABLE KEYS */;
INSERT INTO `Disability` VALUES (1,'Alcoholism',1),(2,'Drug Addiction',1),(3,'HIV',1),(4,'PTSD',1),(5,'Blindness',1),(6,'Deafness',1),(7,'Amputation',1),(8,'Depression',1),(9,'Diabetes',1),(10,'Anxiety',1),(11,'OCD',1),(12,'Eating Disorder',1),(13,'Schizophrenia',1),(14,'Bipolar Disorder',1),(15,'Skin Condition',1),(16,'Tourette\'s Syndrome',1),(17,'Vertigo',1),(18,'Heart Condition',1),(19,'Paraplegia',1),(20,'ADHD',1),(21,'Autism',1),(22,'Sleeping Disorder',1);
/*!40000 ALTER TABLE `Disability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ethnicity`
--

DROP TABLE IF EXISTS `Ethnicity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ethnicity` (
  `EthnicityId` int NOT NULL AUTO_INCREMENT,
  `Ethnicity` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`EthnicityId`),
  KEY `fk_Ethnicity_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Ethnicity_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ethnicity`
--

LOCK TABLES `Ethnicity` WRITE;
/*!40000 ALTER TABLE `Ethnicity` DISABLE KEYS */;
INSERT INTO `Ethnicity` VALUES (1,'White',1),(2,'Black',1),(3,'Hispanic',1),(4,'Asian',1),(5,'Native American',1),(6,'Pacific Islander',1);
/*!40000 ALTER TABLE `Ethnicity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Gender`
--

DROP TABLE IF EXISTS `Gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Gender` (
  `GenderId` int NOT NULL AUTO_INCREMENT,
  `Gender` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`GenderId`),
  KEY `fk_Gender_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Gender_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Gender`
--

LOCK TABLES `Gender` WRITE;
/*!40000 ALTER TABLE `Gender` DISABLE KEYS */;
INSERT INTO `Gender` VALUES (1,'Male',1),(2,'Female',1),(3,'Non-Binary',1),(4,'Other',1);
/*!40000 ALTER TABLE `Gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighbor`
--

DROP TABLE IF EXISTS `HousingInsecureNeighbor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighbor` (
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
  CONSTRAINT `fk_HousingInsecureNeighbor_CaseManagerId` FOREIGN KEY (`CaseManagerId`) REFERENCES `CaseManager` (`CaseManagerId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_DesiredLocationId` FOREIGN KEY (`DesiredLocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_GenderId` FOREIGN KEY (`GenderId`) REFERENCES `Gender` (`GenderId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_HousingStatusId` FOREIGN KEY (`HousingStatusId`) REFERENCES `HousingStatus` (`HousingStatusId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_PantsSizeId` FOREIGN KEY (`PantsSizeId`) REFERENCES `PantsSize` (`PantsSizeId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_ShirtSizeId` FOREIGN KEY (`ShirtSizeId`) REFERENCES `ShirtSize` (`ShirtSizeId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighbor`
--

LOCK TABLES `HousingInsecureNeighbor` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighbor` DISABLE KEYS */;
INSERT INTO `HousingInsecureNeighbor` VALUES (2,'John','Smith','Johnny','1990-01-22 18:47:07',1,'234-567-8901',NULL,1,0,0,1,1,2,NULL,NULL,NULL,2,1,NULL,1,1,2,1,1,10,_binary 'first guy',1),(3,'Greg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(4,'Joey','Jones',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2);
/*!40000 ALTER TABLE `HousingInsecureNeighbor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighborDisability`
--

DROP TABLE IF EXISTS `HousingInsecureNeighborDisability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighborDisability` (
  `HousingInsecureNeighborId` int NOT NULL,
  `DisabilityId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborDisability_HousingInsecureNeighbo_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborDisability_DisabilityId_idx` (`DisabilityId`),
  KEY `fk_HousingInsecureNeighborDisability_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_DisabilityId` FOREIGN KEY (`DisabilityId`) REFERENCES `Disability` (`DisabilityId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborDisability`
--

LOCK TABLES `HousingInsecureNeighborDisability` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborDisability` DISABLE KEYS */;
INSERT INTO `HousingInsecureNeighborDisability` VALUES (3,1,1),(3,2,1);
/*!40000 ALTER TABLE `HousingInsecureNeighborDisability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighborEthnicity`
--

DROP TABLE IF EXISTS `HousingInsecureNeighborEthnicity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighborEthnicity` (
  `HousingInsecureNeighborId` int NOT NULL,
  `EthnicityId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_Ethnicity_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborEthnicity_EthnicityId_idx` (`EthnicityId`),
  KEY `fk_HousingInsecureNeighborEthnicity_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Ethnicity_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborEthnicity_EthnicityId` FOREIGN KEY (`EthnicityId`) REFERENCES `Ethnicity` (`EthnicityId`),
  CONSTRAINT `fk_HousingInsecureNeighborEthnicity_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborEthnicity`
--

LOCK TABLES `HousingInsecureNeighborEthnicity` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborEthnicity` DISABLE KEYS */;
INSERT INTO `HousingInsecureNeighborEthnicity` VALUES (2,1,1),(2,2,1),(3,3,1),(4,4,2);
/*!40000 ALTER TABLE `HousingInsecureNeighborEthnicity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighborFamilyMember`
--

DROP TABLE IF EXISTS `HousingInsecureNeighborFamilyMember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighborFamilyMember` (
  `HousingInsecureNeighborFamilyMemberId` int NOT NULL AUTO_INCREMENT,
  `HousingInsecureNeighborId` int NOT NULL,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `PreferredName` varchar(45) DEFAULT NULL,
  `RelationshipToNeighbor` enum('Undefined','Child','Parent','Sibling','Cousin','AuntOrUncle','Grandparent','Grandchild','NieceOrNephew','Other') NOT NULL,
  `GenderId` int DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `LocationId` int DEFAULT NULL,
  `IsHoused` tinyint DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`HousingInsecureNeighborFamilyMemberId`),
  KEY `fk_HousingInsecureNeighborFamily_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborFamily_GenderId_idx` (`GenderId`),
  KEY `fk_HousingInsecureNeighborFamily_LocationId_idx` (`LocationId`),
  KEY `fk_HousingInsecureNeighborFamilyMember_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_GenderId` FOREIGN KEY (`GenderId`) REFERENCES `Gender` (`GenderId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamilyMember_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborFamilyMember`
--

LOCK TABLES `HousingInsecureNeighborFamilyMember` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborFamilyMember` DISABLE KEYS */;
INSERT INTO `HousingInsecureNeighborFamilyMember` VALUES (1,3,'Bob','Smith','Bobby','Parent',1,'456-789-0123','bob@gmail.com',NULL,1,_binary 'testing',1);
/*!40000 ALTER TABLE `HousingInsecureNeighborFamilyMember` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighborRequest`
--

DROP TABLE IF EXISTS `HousingInsecureNeighborRequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighborRequest` (
  `HousingInsecureNeighborId` int NOT NULL,
  `RequestId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborRequest_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborRequest_RequestId_idx` (`RequestId`),
  KEY `fk_HousingInsecureNeighborRequest_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborRequest_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborRequest_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborRequest_RequestId` FOREIGN KEY (`RequestId`) REFERENCES `Request` (`RequestId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborRequest`
--

LOCK TABLES `HousingInsecureNeighborRequest` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborRequest` DISABLE KEYS */;
INSERT INTO `HousingInsecureNeighborRequest` VALUES (3,1,1),(3,2,1);
/*!40000 ALTER TABLE `HousingInsecureNeighborRequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighborSkill`
--

DROP TABLE IF EXISTS `HousingInsecureNeighborSkill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighborSkill` (
  `HousingInsecureNeighborId` int NOT NULL,
  `SkillId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborSkill_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborSkill_SkillId_idx` (`SkillId`),
  KEY `fk_HousingInsecureNeighborSkill_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborSkill_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborSkill_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborSkill_SkillId` FOREIGN KEY (`SkillId`) REFERENCES `Skill` (`SkillId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborSkill`
--

LOCK TABLES `HousingInsecureNeighborSkill` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborSkill` DISABLE KEYS */;
/*!40000 ALTER TABLE `HousingInsecureNeighborSkill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighborTent`
--

DROP TABLE IF EXISTS `HousingInsecureNeighborTent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighborTent` (
  `HousingInsecureNeighborId` int NOT NULL,
  `TentId` int NOT NULL,
  `OutreachTeamId` int NOT NULL,
  KEY `fk_HousingInsecureNeighborTent_TentId_idx` (`TentId`),
  KEY `fk_HousingInsecureNeighborTent_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborTent_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_TentId` FOREIGN KEY (`TentId`) REFERENCES `Tent` (`TentId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborTent`
--

LOCK TABLES `HousingInsecureNeighborTent` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborTent` DISABLE KEYS */;
INSERT INTO `HousingInsecureNeighborTent` VALUES (2,2,1);
/*!40000 ALTER TABLE `HousingInsecureNeighborTent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingStatus`
--

DROP TABLE IF EXISTS `HousingStatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingStatus` (
  `HousingStatusId` int NOT NULL AUTO_INCREMENT,
  `HousingStatus` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`HousingStatusId`),
  KEY `fk_HousingStatus_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_HousingStatus_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingStatus`
--

LOCK TABLES `HousingStatus` WRITE;
/*!40000 ALTER TABLE `HousingStatus` DISABLE KEYS */;
INSERT INTO `HousingStatus` VALUES (1,'Not in system',1),(2,'No housing plan',1),(3,'Has housing plan',1),(4,'Is housed',1);
/*!40000 ALTER TABLE `HousingStatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingStatusHistory`
--

DROP TABLE IF EXISTS `HousingStatusHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingStatusHistory` (
  `HousingInsecureNeighborId` int NOT NULL,
  `HousingStatusId` int NOT NULL,
  `FirstRecorded` date NOT NULL,
  KEY `fk_HousingStatusHistory_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingStatusHistory_HousingStatusId_idx` (`HousingStatusId`),
  CONSTRAINT `fk_HousingStatusHistory_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingStatusHistory_HousingStatusId` FOREIGN KEY (`HousingStatusId`) REFERENCES `HousingStatus` (`HousingStatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingStatusHistory`
--

LOCK TABLES `HousingStatusHistory` WRITE;
/*!40000 ALTER TABLE `HousingStatusHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `HousingStatusHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `IsHousedHistory`
--

DROP TABLE IF EXISTS `IsHousedHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `IsHousedHistory` (
  `HousingInsecureNeighborId` int NOT NULL,
  `IsHoused` tinyint NOT NULL,
  `FirstRecorded` date NOT NULL,
  KEY `fk_IsUnhousedHistory_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_IsUnhousedHistory_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IsHousedHistory`
--

LOCK TABLES `IsHousedHistory` WRITE;
/*!40000 ALTER TABLE `IsHousedHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `IsHousedHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Location`
--

DROP TABLE IF EXISTS `Location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Location` (
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
  CONSTRAINT `fk_Location_LocationTypeId` FOREIGN KEY (`LocationTypeId`) REFERENCES `LocationType` (`LocationTypeId`),
  CONSTRAINT `fk_Location_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
INSERT INTO `Location` VALUES (1,NULL,1,38.951500,-77.348700,NULL,'Reston','UT','20190',1,NULL,NULL,1),(2,NULL,2,38.951600,-77.348800,NULL,'Reston','UT','20190',1,NULL,NULL,1),(3,NULL,3,38.951700,-77.348900,NULL,'Reston','UT','20190',1,NULL,NULL,2);
/*!40000 ALTER TABLE `Location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LocationHistory`
--

DROP TABLE IF EXISTS `LocationHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LocationHistory` (
  `HousingInsecureNeighborId` int NOT NULL,
  `LocationId` int NOT NULL,
  `FirstRecordedDate` date NOT NULL,
  KEY `fk_LocationHistory_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_LocationHistory_LocationId_idx` (`LocationId`),
  CONSTRAINT `fk_LocationHistory_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_LocationHistory_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LocationHistory`
--

LOCK TABLES `LocationHistory` WRITE;
/*!40000 ALTER TABLE `LocationHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `LocationHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LocationType`
--

DROP TABLE IF EXISTS `LocationType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `LocationType` (
  `LocationTypeId` int NOT NULL AUTO_INCREMENT,
  `LocationType` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`LocationTypeId`),
  KEY `fk_LocationType_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_LocationType_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LocationType`
--

LOCK TABLES `LocationType` WRITE;
/*!40000 ALTER TABLE `LocationType` DISABLE KEYS */;
INSERT INTO `LocationType` VALUES (1,'Tent',1),(2,'Car',1),(3,'Bus Stop',1),(4,'Shelter',1),(5,'Nothing',1),(6,'Apartment',1),(7,'House',1);
/*!40000 ALTER TABLE `LocationType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OutreachTeam`
--

DROP TABLE IF EXISTS `OutreachTeam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OutreachTeam` (
  `OutreachTeamId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OutreachTeam`
--

LOCK TABLES `OutreachTeam` WRITE;
/*!40000 ALTER TABLE `OutreachTeam` DISABLE KEYS */;
INSERT INTO `OutreachTeam` VALUES (1,'test team 1'),(2,'test team 2');
/*!40000 ALTER TABLE `OutreachTeam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PantsSize`
--

DROP TABLE IF EXISTS `PantsSize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PantsSize` (
  `PantsSizeId` int NOT NULL AUTO_INCREMENT,
  `PantsSize` varchar(45) DEFAULT NULL,
  `OutreachTeamId` int DEFAULT NULL,
  PRIMARY KEY (`PantsSizeId`),
  KEY `fk_PantsSize_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_PantsSize_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PantsSize`
--

LOCK TABLES `PantsSize` WRITE;
/*!40000 ALTER TABLE `PantsSize` DISABLE KEYS */;
/*!40000 ALTER TABLE `PantsSize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Request`
--

DROP TABLE IF EXISTS `Request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Request` (
  `RequestId` int NOT NULL AUTO_INCREMENT,
  `Request` varchar(45) NOT NULL,
  `OutreachTeamid` int NOT NULL,
  PRIMARY KEY (`RequestId`),
  KEY `fk_Request_OutreachTeamId_idx` (`OutreachTeamid`),
  CONSTRAINT `fk_Request_OutreachTeamId` FOREIGN KEY (`OutreachTeamid`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Request`
--

LOCK TABLES `Request` WRITE;
/*!40000 ALTER TABLE `Request` DISABLE KEYS */;
INSERT INTO `Request` VALUES (1,'Tent',1),(2,'Cushion',1),(3,'Sleeping Bag',1),(4,'Blanket',1),(5,'Tarp',1),(6,'Coat',1),(7,'Jacket',1),(8,'Gloves',1),(9,'Socks',1);
/*!40000 ALTER TABLE `Request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ShirtSize`
--

DROP TABLE IF EXISTS `ShirtSize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ShirtSize` (
  `ShirtSizeId` int NOT NULL AUTO_INCREMENT,
  `ShirtSize` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`ShirtSizeId`),
  KEY `fk_ShirtSize_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_ShirtSize_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ShirtSize`
--

LOCK TABLES `ShirtSize` WRITE;
/*!40000 ALTER TABLE `ShirtSize` DISABLE KEYS */;
INSERT INTO `ShirtSize` VALUES (1,'Women\'s XS',1),(2,'Women\'s S',1),(3,'Women\'s M',1),(4,'Women\'s L',1),(5,'Women\'s XL',1),(6,'Women\'s XXL',1),(7,'Women\'s XXXL',1),(8,'Men\'s XS',1),(9,'Men\'s S',1),(10,'Men\'s M',1),(11,'Men\'s L',1),(12,'Men\'s XL',1),(13,'Men\'s XXL',1),(14,'Men\'s XXXL',1);
/*!40000 ALTER TABLE `ShirtSize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ShoeSize`
--

DROP TABLE IF EXISTS `ShoeSize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ShoeSize` (
  `ShoeSizeId` int NOT NULL AUTO_INCREMENT,
  `ShoeSize` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`ShoeSizeId`),
  KEY `fk_ShoeSize_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_ShoeSize_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ShoeSize`
--

LOCK TABLES `ShoeSize` WRITE;
/*!40000 ALTER TABLE `ShoeSize` DISABLE KEYS */;
INSERT INTO `ShoeSize` VALUES (1,'Men\'s 6',1),(2,'Men\'s 6.5',1),(3,'Men\'s 7',1),(4,'Men\'s 7.5',1),(5,'Men\'s 8',1);
/*!40000 ALTER TABLE `ShoeSize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Skill`
--

DROP TABLE IF EXISTS `Skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Skill` (
  `SkillId` int NOT NULL AUTO_INCREMENT,
  `Skill` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`SkillId`),
  KEY `fk_Skill_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_Skill_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Skill`
--

LOCK TABLES `Skill` WRITE;
/*!40000 ALTER TABLE `Skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `Skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SleepingBagCondition`
--

DROP TABLE IF EXISTS `SleepingBagCondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SleepingBagCondition` (
  `SleepingBagConditionId` int NOT NULL AUTO_INCREMENT,
  `SleepingBagCondition` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`SleepingBagConditionId`),
  KEY `fk_SleepingBagCondition_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_SleepingBagCondition_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SleepingBagCondition`
--

LOCK TABLES `SleepingBagCondition` WRITE;
/*!40000 ALTER TABLE `SleepingBagCondition` DISABLE KEYS */;
INSERT INTO `SleepingBagCondition` VALUES (1,'New',1),(2,'Gently Used',1),(3,'Moderately Used',1),(4,'Ripped',1),(5,'Wet',1),(6,'Filthy',1),(7,'Broken Zipper',1);
/*!40000 ALTER TABLE `SleepingBagCondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SupportServiceOrganization`
--

DROP TABLE IF EXISTS `SupportServiceOrganization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SupportServiceOrganization` (
  `SupportServiceOrganizationId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Comments` blob,
  `OutreachTeamId` int NOT NULL,
  PRIMARY KEY (`SupportServiceOrganizationId`),
  KEY `fk_SupportServiceOrganization_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_SupportServiceOrganization_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SupportServiceOrganization`
--

LOCK TABLES `SupportServiceOrganization` WRITE;
/*!40000 ALTER TABLE `SupportServiceOrganization` DISABLE KEYS */;
/*!40000 ALTER TABLE `SupportServiceOrganization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tent`
--

DROP TABLE IF EXISTS `Tent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tent` (
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
  CONSTRAINT `fk_Tent_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `fk_Tent_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`),
  CONSTRAINT `fk_Tent_TentConditionId` FOREIGN KEY (`TentConditionId`) REFERENCES `TentCondition` (`TentConditionId`),
  CONSTRAINT `fk_Tent_TentUsageId` FOREIGN KEY (`TentUsageId`) REFERENCES `TentUsage` (`TentUsageId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tent`
--

LOCK TABLES `Tent` WRITE;
/*!40000 ALTER TABLE `Tent` DISABLE KEYS */;
INSERT INTO `Tent` VALUES (2,1,4,NULL,2,1,_binary 'first tent',1);
/*!40000 ALTER TABLE `Tent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TentCondition`
--

DROP TABLE IF EXISTS `TentCondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TentCondition` (
  `TentConditionId` int NOT NULL AUTO_INCREMENT,
  `TentCondition` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`TentConditionId`),
  KEY `fk_TentCondition_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_TentCondition_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TentCondition`
--

LOCK TABLES `TentCondition` WRITE;
/*!40000 ALTER TABLE `TentCondition` DISABLE KEYS */;
INSERT INTO `TentCondition` VALUES (1,'New',1),(2,'Gently Used',1),(3,'Moderately Used',1),(4,'Broken Zipper',1),(5,'Torn',1),(6,'No Rainfly',1),(7,'Collapsed',1),(8,'Broken Pole(s)',1);
/*!40000 ALTER TABLE `TentCondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TentUsage`
--

DROP TABLE IF EXISTS `TentUsage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TentUsage` (
  `TentUsageId` int NOT NULL AUTO_INCREMENT,
  `TentUsage` varchar(45) NOT NULL,
  `OutreachTeamId` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`TentUsageId`),
  KEY `fk_TentUsage_OutreachTeamId_idx` (`OutreachTeamId`),
  CONSTRAINT `fk_TentUsage_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TentUsage`
--

LOCK TABLES `TentUsage` WRITE;
/*!40000 ALTER TABLE `TentUsage` DISABLE KEYS */;
INSERT INTO `TentUsage` VALUES (1,'Permanent Residence',1),(2,'Occasional Residence',1),(3,'Storage',1),(4,'Vacant',1);
/*!40000 ALTER TABLE `TentUsage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
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
  CONSTRAINT `fk_User_OutreachTeamId` FOREIGN KEY (`OutreachTeamId`) REFERENCES `OutreachTeam` (`OutreachTeamId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-19  1:14:40

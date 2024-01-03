-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: UnhousedOutreach
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

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
  `CommonName` varchar(45) DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `Organization` varchar(45) DEFAULT NULL,
  `Comments` blob,
  PRIMARY KEY (`CaseManagerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CaseManager`
--

LOCK TABLES `CaseManager` WRITE;
/*!40000 ALTER TABLE `CaseManager` DISABLE KEYS */;
/*!40000 ALTER TABLE `CaseManager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CushionCondition`
--

DROP TABLE IF EXISTS `CushionCondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CushionCondition` (
  `CushionConditionId` int NOT NULL,
  `CushionCondition` varchar(45) NOT NULL,
  PRIMARY KEY (`CushionConditionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CushionCondition`
--

LOCK TABLES `CushionCondition` WRITE;
/*!40000 ALTER TABLE `CushionCondition` DISABLE KEYS */;
INSERT INTO `CushionCondition` VALUES (1,'New'),(2,'Ripped'),(3,'Wet'),(4,'Filthy'),(5,'Gently Used'),(6,'Moderately Used');
/*!40000 ALTER TABLE `CushionCondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CushionType`
--

DROP TABLE IF EXISTS `CushionType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CushionType` (
  `CushionTypeId` int NOT NULL,
  `CushionType` varchar(45) NOT NULL,
  PRIMARY KEY (`CushionTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CushionType`
--

LOCK TABLES `CushionType` WRITE;
/*!40000 ALTER TABLE `CushionType` DISABLE KEYS */;
INSERT INTO `CushionType` VALUES (1,'Twin Mattress'),(2,'Full Mattress'),(3,'Cot'),(4,'Foam'),(5,'Sleeping Pad'),(6,'Air Mattress'),(7,'Carpet');
/*!40000 ALTER TABLE `CushionType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Disability`
--

DROP TABLE IF EXISTS `Disability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Disability` (
  `DisabilityId` int NOT NULL,
  `Disability` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`DisabilityId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Disability`
--

LOCK TABLES `Disability` WRITE;
/*!40000 ALTER TABLE `Disability` DISABLE KEYS */;
INSERT INTO `Disability` VALUES (1,'Alcoholism'),(2,'Drug Addiction'),(3,'HIV'),(4,'PTSD'),(5,'Blindness'),(6,'Deafness'),(7,'Amputation'),(8,'Depression'),(9,'Diabetes'),(10,'Anxiety'),(11,'OCD'),(12,'Eating Disorder'),(13,'Schizophrenia'),(14,'Bipolar Disorder'),(15,'Skin Condition'),(16,'Tourettes Syndrome'),(17,'Vertigo'),(18,'Heart Condition'),(19,'Paraplegia'),(20,'ADHD'),(21,'Autism'),(22,'Sleeping Disorder');
/*!40000 ALTER TABLE `Disability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ethnicity`
--

DROP TABLE IF EXISTS `Ethnicity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ethnicity` (
  `EthnicityId` int NOT NULL,
  `Ethnicity` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`EthnicityId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ethnicity`
--

LOCK TABLES `Ethnicity` WRITE;
/*!40000 ALTER TABLE `Ethnicity` DISABLE KEYS */;
INSERT INTO `Ethnicity` VALUES (1,'White'),(2,'Black'),(3,'Hispanic'),(4,'Asian'),(5,'Native American'),(6,'Pacific Islander');
/*!40000 ALTER TABLE `Ethnicity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Gender`
--

DROP TABLE IF EXISTS `Gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Gender` (
  `GenderId` int NOT NULL,
  `Gender` varchar(45) NOT NULL,
  PRIMARY KEY (`GenderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Gender`
--

LOCK TABLES `Gender` WRITE;
/*!40000 ALTER TABLE `Gender` DISABLE KEYS */;
INSERT INTO `Gender` VALUES (1,'Male'),(2,'Female'),(3,'Non-Binary'),(4,'Other');
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
  `CommonName` varchar(45) DEFAULT NULL,
  `DateOfBirth` datetime DEFAULT NULL,
  `GenderId` int DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `HousingStatusId` int DEFAULT NULL,
  `IsUnhoused` tinyint DEFAULT NULL,
  `IsVeteran` tinyint DEFAULT NULL,
  `CoatOrJacketCount` int DEFAULT NULL,
  `ShirtSizeId` int DEFAULT NULL,
  `ShoeSize` int DEFAULT NULL,
  `PantsSizeId` int DEFAULT NULL,
  `CaseManagerId` int DEFAULT NULL,
  `LocationId` int DEFAULT NULL,
  `DesiredLocationId` int DEFAULT NULL,
  `Comments` blob,
  PRIMARY KEY (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighbor_GenderId_idx` (`GenderId`),
  KEY `fk_HousingInsecureNeighbor_HousingStatusId_idx` (`HousingStatusId`),
  KEY `fk_HousingInsecureNeighbor_LocationId_idx` (`LocationId`),
  KEY `fk_HousingInsecureNeighbor_DesiredLocationId_idx` (`DesiredLocationId`),
  KEY `fk_HousingInsecureNeighbor_CaseManagerId_idx` (`CaseManagerId`),
  KEY `fk_HousingInsecureNeighbor_ShirtSizeId_idx` (`ShirtSizeId`),
  KEY `fk_HousingInsecureNeighbor_PantsSizeId_idx` (`PantsSizeId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_CaseManagerId` FOREIGN KEY (`CaseManagerId`) REFERENCES `CaseManager` (`CaseManagerId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_DesiredLocationId` FOREIGN KEY (`DesiredLocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_GenderId` FOREIGN KEY (`GenderId`) REFERENCES `Gender` (`GenderId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_HousingStatusId` FOREIGN KEY (`HousingStatusId`) REFERENCES `HousingStatus` (`HousingStatusId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_PantsSizeId` FOREIGN KEY (`PantsSizeId`) REFERENCES `PantsSize` (`PantsSizeId`),
  CONSTRAINT `fk_HousingInsecureNeighbor_ShirtSizeId` FOREIGN KEY (`ShirtSizeId`) REFERENCES `ShirtSize` (`ShirtSizeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighbor`
--

LOCK TABLES `HousingInsecureNeighbor` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighbor` DISABLE KEYS */;
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
  KEY `fk_HousingInsecureNeighborDisability_HousingInsecureNeighbo_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborDisability_DisabilityId_idx` (`DisabilityId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_DisabilityId` FOREIGN KEY (`DisabilityId`) REFERENCES `Disability` (`DisabilityId`),
  CONSTRAINT `fk_HousingInsecureNeighborDisability_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborDisability`
--

LOCK TABLES `HousingInsecureNeighborDisability` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborDisability` DISABLE KEYS */;
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
  KEY `fk_Ethnicity_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborEthnicity_EthnicityId_idx` (`EthnicityId`),
  CONSTRAINT `fk_Ethnicity_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborEthnicity_EthnicityId` FOREIGN KEY (`EthnicityId`) REFERENCES `Ethnicity` (`EthnicityId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborEthnicity`
--

LOCK TABLES `HousingInsecureNeighborEthnicity` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborEthnicity` DISABLE KEYS */;
/*!40000 ALTER TABLE `HousingInsecureNeighborEthnicity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingInsecureNeighborFamily`
--

DROP TABLE IF EXISTS `HousingInsecureNeighborFamily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingInsecureNeighborFamily` (
  `HousingInsecureNeighborFamilyId` int NOT NULL AUTO_INCREMENT,
  `HousingInsecureNeighborId` int NOT NULL,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `RelationshipToNeighbor` enum('Undefined','Child','Parent','Sibling','Cousin','Uncle/Aunt','Grandparent','Grandson','Nephew/Neice','Other') NOT NULL,
  `GenderId` int DEFAULT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `EmailAddress` varchar(45) DEFAULT NULL,
  `LocationId` int DEFAULT NULL,
  `IsHoused` tinyint DEFAULT NULL,
  `Comments` blob,
  PRIMARY KEY (`HousingInsecureNeighborFamilyId`),
  KEY `fk_HousingInsecureNeighborFamily_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborFamily_GenderId_idx` (`GenderId`),
  KEY `fk_HousingInsecureNeighborFamily_LocationId_idx` (`LocationId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_GenderId` FOREIGN KEY (`GenderId`) REFERENCES `Gender` (`GenderId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborFamily_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborFamily`
--

LOCK TABLES `HousingInsecureNeighborFamily` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborFamily` DISABLE KEYS */;
/*!40000 ALTER TABLE `HousingInsecureNeighborFamily` ENABLE KEYS */;
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
  KEY `fk_HousingInsecureNeighborRequest_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborRequest_RequestId_idx` (`RequestId`),
  CONSTRAINT `fk_HousingInsecureNeighborRequest_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborRequest_RequestId` FOREIGN KEY (`RequestId`) REFERENCES `Request` (`RequestId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborRequest`
--

LOCK TABLES `HousingInsecureNeighborRequest` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborRequest` DISABLE KEYS */;
/*!40000 ALTER TABLE `HousingInsecureNeighborRequest` ENABLE KEYS */;
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
  `CushionTypeId` int DEFAULT NULL,
  `CushionConditionId` int DEFAULT NULL,
  `BlanketCount` int DEFAULT NULL,
  `HasSleepingBag` int DEFAULT NULL,
  `SleepingBagConditionId` int DEFAULT NULL,
  `SleepingBagTemperatureThreshold` int DEFAULT NULL,
  KEY `fk_HousingInsecureNeighborTent_TentId_idx` (`TentId`),
  KEY `fk_HousingInsecureNeighborTent_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  KEY `fk_HousingInsecureNeighborTent_CushionTypeId_idx` (`CushionTypeId`),
  KEY `fk_HousingInsecureNeighborTent_CushionConditionId_idx` (`CushionConditionId`),
  KEY `fk_HousingInsecureNeighborTent_SleepingBagConditionId_idx` (`SleepingBagConditionId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_CushionConditionId` FOREIGN KEY (`CushionConditionId`) REFERENCES `CushionCondition` (`CushionConditionId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_CushionTypeId` FOREIGN KEY (`CushionTypeId`) REFERENCES `CushionType` (`CushionTypeId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_SleepingBagConditionId` FOREIGN KEY (`SleepingBagConditionId`) REFERENCES `SleepingBagCondition` (`SleepingBagConditionId`),
  CONSTRAINT `fk_HousingInsecureNeighborTent_TentId` FOREIGN KEY (`TentId`) REFERENCES `Tent` (`TentId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingInsecureNeighborTent`
--

LOCK TABLES `HousingInsecureNeighborTent` WRITE;
/*!40000 ALTER TABLE `HousingInsecureNeighborTent` DISABLE KEYS */;
/*!40000 ALTER TABLE `HousingInsecureNeighborTent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HousingStatus`
--

DROP TABLE IF EXISTS `HousingStatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HousingStatus` (
  `HousingStatusId` int NOT NULL,
  `HousingStatus` varchar(45) NOT NULL,
  PRIMARY KEY (`HousingStatusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HousingStatus`
--

LOCK TABLES `HousingStatus` WRITE;
/*!40000 ALTER TABLE `HousingStatus` DISABLE KEYS */;
INSERT INTO `HousingStatus` VALUES (1,'Not in system'),(2,'No housing plan'),(3,'Has housing plan'),(4,'Is housed');
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
-- Table structure for table `IsUnhousedHistory`
--

DROP TABLE IF EXISTS `IsUnhousedHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `IsUnhousedHistory` (
  `HousingInsecureNeighborId` int NOT NULL,
  `IsUnhoused` tinyint NOT NULL,
  `FirstRecorded` date NOT NULL,
  KEY `fk_IsUnhousedHistory_HousingInsecureNeighborId_idx` (`HousingInsecureNeighborId`),
  CONSTRAINT `fk_IsUnhousedHistory_HousingInsecureNeighborId` FOREIGN KEY (`HousingInsecureNeighborId`) REFERENCES `HousingInsecureNeighbor` (`HousingInsecureNeighborId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `IsUnhousedHistory`
--

LOCK TABLES `IsUnhousedHistory` WRITE;
/*!40000 ALTER TABLE `IsUnhousedHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `IsUnhousedHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Location`
--

DROP TABLE IF EXISTS `Location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Location` (
  `LocationId` int NOT NULL AUTO_INCREMENT,
  `LocationTypeId` int NOT NULL,
  `Latitude` decimal(10,0) DEFAULT NULL,
  `Longitude` decimal(10,0) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `City` varchar(45) NOT NULL,
  `State` enum('Undefined','AL','AK','AZ','AR','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN','IA','KS','KT','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY') NOT NULL,
  `ZipCode` varchar(10) NOT NULL,
  `IsLegal` tinyint DEFAULT NULL,
  `Comments` blob,
  PRIMARY KEY (`LocationId`),
  KEY `fk_Location_LocationTypeId_idx` (`LocationTypeId`),
  CONSTRAINT `fk_Location_LocationTypeId` FOREIGN KEY (`LocationTypeId`) REFERENCES `LocationType` (`LocationTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
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
  `LocationTypeId` int NOT NULL,
  `LocationType` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`LocationTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LocationType`
--

LOCK TABLES `LocationType` WRITE;
/*!40000 ALTER TABLE `LocationType` DISABLE KEYS */;
INSERT INTO `LocationType` VALUES (1,'Tent'),(2,'Car'),(3,'Bus Stop'),(4,'Shelter'),(5,'Nothing'),(6,'Apartment'),(7,'House');
/*!40000 ALTER TABLE `LocationType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PantsSize`
--

DROP TABLE IF EXISTS `PantsSize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PantsSize` (
  `PantsSizeId` int NOT NULL,
  `PantsSize` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PantsSizeId`)
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
  `RequestId` int NOT NULL,
  `Request` varchar(45) NOT NULL,
  PRIMARY KEY (`RequestId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Request`
--

LOCK TABLES `Request` WRITE;
/*!40000 ALTER TABLE `Request` DISABLE KEYS */;
INSERT INTO `Request` VALUES (1,'Tent'),(2,'Cushion'),(3,'Sleeping Bag'),(4,'Blanket'),(5,'Tarp'),(6,'Coat'),(7,'Jacket'),(8,'Gloves'),(9,'Socks');
/*!40000 ALTER TABLE `Request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ShirtSize`
--

DROP TABLE IF EXISTS `ShirtSize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ShirtSize` (
  `ShirtSizeId` int NOT NULL,
  `ShirtSize` varchar(45) NOT NULL,
  PRIMARY KEY (`ShirtSizeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ShirtSize`
--

LOCK TABLES `ShirtSize` WRITE;
/*!40000 ALTER TABLE `ShirtSize` DISABLE KEYS */;
INSERT INTO `ShirtSize` VALUES (1,'Women\'s XS'),(2,'Women\'s S'),(3,'Women\'s M'),(4,'Women\'s L'),(5,'Women\'s XL'),(6,'Women\'s XXL'),(7,'Women\'s XXXL'),(8,'Men\'s XS'),(9,'Men\'s S'),(10,'Men\'s M'),(11,'Men\'s L'),(12,'Men\'s XL'),(13,'Men\'s XXL'),(14,'Men\'s XXXL');
/*!40000 ALTER TABLE `ShirtSize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SleepingBagCondition`
--

DROP TABLE IF EXISTS `SleepingBagCondition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SleepingBagCondition` (
  `SleepingBagConditionId` int NOT NULL,
  `SleepingBagCondition` varchar(45) NOT NULL,
  PRIMARY KEY (`SleepingBagConditionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SleepingBagCondition`
--

LOCK TABLES `SleepingBagCondition` WRITE;
/*!40000 ALTER TABLE `SleepingBagCondition` DISABLE KEYS */;
INSERT INTO `SleepingBagCondition` VALUES (1,'New'),(2,'Gently Used'),(3,'Moderately Used'),(4,'Ripped'),(5,'Wet'),(6,'Filthy'),(7,'Broken Zipper');
/*!40000 ALTER TABLE `SleepingBagCondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tent`
--

DROP TABLE IF EXISTS `Tent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tent` (
  `TentId` int NOT NULL,
  `LocationId` int NOT NULL,
  `PersonSize` int DEFAULT NULL,
  `TentConditionId` int DEFAULT NULL,
  `TarpCount` int DEFAULT NULL,
  `TentUsageId` int DEFAULT NULL,
  `Comments` blob,
  PRIMARY KEY (`TentId`),
  KEY `fk_Tent_LocationId_idx` (`LocationId`),
  KEY `fk_Tent_TentConditionId_idx` (`TentConditionId`),
  KEY `fk_Tent_TentUsageId_idx` (`TentUsageId`),
  CONSTRAINT `fk_Tent_LocationId` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`LocationId`),
  CONSTRAINT `fk_Tent_TentConditionId` FOREIGN KEY (`TentConditionId`) REFERENCES `TentCondition` (`TentConditionId`),
  CONSTRAINT `fk_Tent_TentUsageId` FOREIGN KEY (`TentUsageId`) REFERENCES `TentUsage` (`TentUsageId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tent`
--

LOCK TABLES `Tent` WRITE;
/*!40000 ALTER TABLE `Tent` DISABLE KEYS */;
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
  PRIMARY KEY (`TentConditionId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TentCondition`
--

LOCK TABLES `TentCondition` WRITE;
/*!40000 ALTER TABLE `TentCondition` DISABLE KEYS */;
INSERT INTO `TentCondition` VALUES (1,'New'),(2,'Gently Used'),(3,'Moderately Used'),(4,'Broken Zipper'),(5,'Torn'),(6,'No Rainfly'),(7,'Collapsed'),(8,'Broken Pole(s)');
/*!40000 ALTER TABLE `TentCondition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TentUsage`
--

DROP TABLE IF EXISTS `TentUsage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TentUsage` (
  `TentUsageId` int NOT NULL,
  `TentUsage` varchar(45) NOT NULL,
  PRIMARY KEY (`TentUsageId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TentUsage`
--

LOCK TABLES `TentUsage` WRITE;
/*!40000 ALTER TABLE `TentUsage` DISABLE KEYS */;
INSERT INTO `TentUsage` VALUES (1,'Permanent Residence'),(2,'Occasional Residence'),(3,'Storage'),(4,'Vacant');
/*!40000 ALTER TABLE `TentUsage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-02 22:19:52

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Customer` (
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `custPhone` VARCHAR(20) NULL DEFAULT '000-000-0000',
  `email` VARCHAR(500) NOT NULL,
  `userID` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(10) NOT NULL,
  `zipCode` INT NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NULL,
  PRIMARY KEY (`userID`))
ENGINE = InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Table `mydb`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Employee` (
  `employeeID` INT NOT NULL,
  `positionCode` INT NULL,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `emplPhone` VARCHAR(20) NULL DEFAULT '000-000-0000',
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`employeeID`, `password`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pay`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pay` (
  `payType` VARCHAR(45) NOT NULL,
  `payDate` DATE NULL,
  `payCode` VARCHAR(45) NOT NULL,
  `employeeIDpay` INT NOT NULL,
  PRIMARY KEY (`payType`),
  INDEX `fk_Pay_Employee1_idx` (`employeeIDpay` ASC) VISIBLE,
  CONSTRAINT `fk_Pay_Employee1`
    FOREIGN KEY (`employeeIDpay`)
    REFERENCES `mydb`.`Employee` (`employeeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Supplier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Supplier` (
  `supplierID` INT NOT NULL AUTO_INCREMENT,
  `supplierName` VARCHAR(45) NOT NULL,
  `supplierEmail` VARCHAR(60) NULL,
  `supplierPhone` VARCHAR(20) NULL DEFAULT '000-000-0000',
  `supplierType` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(10) NOT NULL,
  `zipCode` INT NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `street` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`supplierID`))
ENGINE = InnoDB
AUTO_INCREMENT = 001;


-- -----------------------------------------------------
-- Table `mydb`.`EmployeeOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`EmployeeOrder` (
  `orderID` INT NOT NULL,
  `orderType` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `orderMemo` VARCHAR(80) NULL,
  `orderTotal` DECIMAL NULL,
  `orderSupplier` INT NOT NULL,
  `emplyIDOrder` INT NOT NULL,
  PRIMARY KEY (`orderID`),
  INDEX `fk_EmployeeOrder_Supplier1_idx` (`orderSupplier` ASC) VISIBLE,
  INDEX `fk_EmployeeOrder_Employee1_idx` (`emplyIDOrder` ASC) VISIBLE,
  CONSTRAINT `fk_EmployeeOrder_Supplier1`
    FOREIGN KEY (`orderSupplier`)
    REFERENCES `mydb`.`Supplier` (`supplierID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EmployeeOrder_Employee1`
    FOREIGN KEY (`emplyIDOrder`)
    REFERENCES `mydb`.`Employee` (`employeeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Merchandise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Merchandise` (
  `merchanID` INT NOT NULL,
  `SKU` VARCHAR(20) NOT NULL,
  `merchanPrice` DECIMAL NULL,
  `merchanSupplier` INT NOT NULL,
  `merchanOrderID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`merchanID`),
  INDEX `fk_Merchandise_Supplier1_idx` (`merchanSupplier` ASC) VISIBLE,
  INDEX `fk_Merchandise_EmployeeOrder1_idx` (`merchanOrderID` ASC) VISIBLE,
  CONSTRAINT `fk_Merchandise_Supplier1`
    FOREIGN KEY (`merchanSupplier`)
    REFERENCES `mydb`.`Supplier` (`supplierID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Merchandise_EmployeeOrder1`
    FOREIGN KEY (`merchanOrderID`)
    REFERENCES `mydb`.`EmployeeOrder` (`orderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 001;


-- -----------------------------------------------------
-- Table `mydb`.`Milk`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Milk` (
  `milkID` INT NOT NULL,
  `milkType` VARCHAR(45) NULL,
  `milkePrice` DECIMAL NULL,
  `milkSupplier` INT NOT NULL,
  `milkOrderID` INT NOT NULL,
  PRIMARY KEY (`milkID`),
  INDEX `fk_Milk_Supplier1_idx` (`milkSupplier` ASC) VISIBLE,
  INDEX `fk_Milk_EmployeeOrder1_idx` (`milkOrderID` ASC) VISIBLE,
  CONSTRAINT `fk_Milk_Supplier1`
    FOREIGN KEY (`milkSupplier`)
    REFERENCES `mydb`.`Supplier` (`supplierID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Milk_EmployeeOrder1`
    FOREIGN KEY (`milkOrderID`)
    REFERENCES `mydb`.`EmployeeOrder` (`orderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`CartLineItem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`CartLineItem` (
  `SKU` VARCHAR(45) NOT NULL,
  `productName` VARCHAR(45) NOT NULL,
  `productPrice` DECIMAL(10,2) NOT NULL,
  `productOz` VARCHAR(45) NOT NULL,
  `supplierID` INT NOT NULL,
  PRIMARY KEY (`SKU`),
  INDEX `fk_CartLineItem_Supplier1_idx` (`supplierID` ASC) VISIBLE,
  CONSTRAINT `fk_CartLineItem_Supplier1`
    FOREIGN KEY (`supplierID`)
    REFERENCES `mydb`.`Supplier` (`supplierID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 01;


-- -----------------------------------------------------
-- Table `mydb`.`Contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Contact` (
  `fullName` VARCHAR(200) NOT NULL,
  `phone` VARCHAR(20) NULL,
  `email` VARCHAR(100) NULL,
  `feedback` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`fullName`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

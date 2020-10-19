
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/17/2020 19:32:37
-- Generated from EDMX file: E:\FIT5120-TA12-Iteration1\FIT5120App\Models\Questions.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Questions];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Questions]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Questions];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Questions'
CREATE TABLE [dbo].[Questions] (
    [Symptom] varchar(max)  NOT NULL,
    [Industry_name] varchar(max)  NOT NULL,
    [Disease_name] varchar(50)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Disease_name] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [PK_Questions]
    PRIMARY KEY CLUSTERED ([Disease_name] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
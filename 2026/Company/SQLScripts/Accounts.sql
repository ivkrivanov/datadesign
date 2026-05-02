USE [Company_Sales_v1]
GO

/****** Object:  Table [account].[AccountType]    Script Date: 18.2.2026 г. 11:09:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [account].[Accounts] (
	AccountId		INT			IDENTITY (1, 1) NOT NULL,
	Account			INT			NOT NULL,
	Sub_Account		INT			NOT NULL,
	AccountTypeID	INT			NOT NULL,
    Description     NTEXT       NULL,
    StartDate       DATETIME    NULL,
    EndDate         DATETIME    NULL,
    [InsertDate]     DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]   INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           DEFAULT ((1)) NOT NULL,
    [TenantId]       INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Accounts] PRIMARY KEY CLUSTERED ([AccountId] ASC),
    CONSTRAINT [FK_Accounts_AccountTypes] FOREIGN KEY ([AccountTypeID]) REFERENCES [account].[AccountType] ([AccountTypeID])
);
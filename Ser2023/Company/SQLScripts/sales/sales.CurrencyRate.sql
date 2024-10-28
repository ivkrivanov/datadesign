USE Company_Company_v1
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'CurrencyRate' and xtype= 'U')
BEGIN
	CREATE TABLE [sales].[CurrencyRate] (
		[CurrencyRateID]   INT       IDENTITY (1, 1) NOT NULL,
		[CurrencyRateDate] DATETIME  NOT NULL,
		[FromCurrencyCode] NCHAR (3) NOT NULL,
		[ToCurrencyCode]   NCHAR (3) NOT NULL,
		[AverageRate]      MONEY     NOT NULL,
		[EndOfDayRate]     MONEY     NOT NULL,
		[InsertDate]       DATETIME  CONSTRAINT [DF_CurrencyRate_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId]     INT       CONSTRAINT [DF_CurrencyRate_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]       DATETIME  NULL,
		[UpdateUserId]     INT       NULL,
		[IsActive]         SMALLINT  CONSTRAINT [DF_CurrencyRate_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]         INT       CONSTRAINT [DF_CurrencyRate_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_CurrencyRate_CurrencyRateID] PRIMARY KEY CLUSTERED ([CurrencyRateID] ASC),
		CONSTRAINT [FK_CurrencyRate_Currency_FromCurrencyCode] FOREIGN KEY ([FromCurrencyCode]) REFERENCES [sales].[Currency] ([CurrencyCode]),
		CONSTRAINT [FK_CurrencyRate_Currency_ToCurrencyCode] FOREIGN KEY ([ToCurrencyCode]) REFERENCES [sales].[Currency] ([CurrencyCode])
	);
END

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Corrency Rate.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'CurrencyRateID'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time that rate is relevated.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'CurrencyRateDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Currency code from.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'FromCurrencyCode'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Currency code to.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'ToCurrencyCode'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Average rate for the day.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'AverageRate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Rate df end of the day',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'EndOfDayRate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'IsActive'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'CurrencyRate',
    @level2type = N'COLUMN',
    @level2name = N'TenantId'
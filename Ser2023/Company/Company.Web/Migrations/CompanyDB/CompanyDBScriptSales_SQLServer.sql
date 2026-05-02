USE Company_Company_v1
GO
/****** Object:  Table [Sales].[Currency]    Script Date: 19.9.2024 г. 11:42:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE SCHEMA [sales]
GO

CREATE TABLE [sales].[Currency](
	[CurrencyCode] [nchar](3) NOT NULL,
	[Name] [dbo].[Name] NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Currency_CurrencyCode] PRIMARY KEY CLUSTERED ([CurrencyCode] ASC)
 WITH (PAD_INDEX = OFF,
    STATISTICS_NORECOMPUTE = OFF,
    IGNORE_DUP_KEY = OFF,
    ALLOW_ROW_LOCKS = ON,
    ALLOW_PAGE_LOCKS = ON,
    OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]) ON [PRIMARY]

GO
ALTER TABLE [sales].[Currency] ADD  CONSTRAINT [DF_Currency_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]

GO
ALTER TABLE [sales].[Currency] ADD  CONSTRAINT [DF_Currency_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]

GO
ALTER TABLE [sales].[Currency] ADD  CONSTRAINT [DF_Currency_IsActive]  DEFAULT ((1)) FOR [IsActive]

GO
ALTER TABLE [sales].[Currency] ADD  CONSTRAINT [DF_Currency_TenantId]  DEFAULT ((1)) FOR [TenantId]

GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description',
    @value=N'The ISO code for the Currency.' ,
    @level0type=N'SCHEMA',
    @level0name=N'[sales]',
    @level1type=N'TABLE',
    @level1name=N'Currency',
    @level2type=N'COLUMN',
    @level2name=N'CurrencyCode'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description',
    @value=N'Currency name.' ,
    @level0type=N'SCHEMA',
    @level0name=N'[sales]',
    @level1type=N'TABLE',
    @level1name=N'Currency',
    @level2type=N'COLUMN',
    @level2name=N'Name'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description',
    @value=N'Default constraint value of GETDATE()' ,
    @level0type=N'SCHEMA',
    @level0name=N'[sales]',
    @level1type=N'TABLE',
    @level1name=N'Currency',
    @level2type=N'CONSTRAINT',
    @level2name=N'DF_Currency_ModifiedDate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description',
    @value=N'Primary key (clustered) constraint' ,
    @level0type=N'SCHEMA',
    @level0name=N'[sales]',
    @level1type=N'TABLE',
    @level1name=N'Currency',
    @level2type=N'CONSTRAINT',
    @level2name=N'PK_Currency_CurrencyCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description',
    @value=N'Lookup table containing standard ISO currencies.' ,
    @level0type=N'SCHEMA',
    @level0name=N'[sales]',
    @level1type=N'TABLE',
    @level1name=N'Currency'
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [sales].[CurrencyRate](
	[CurrencyRateID] [int] IDENTITY(1,1) NOT NULL,
	[CurrencyRateDate] [datetime] NOT NULL,
	[FromCurrencyCode] [nchar](3) NOT NULL,
	[ToCurrencyCode] [nchar](3) NOT NULL,
	[AverageRate] [money] NOT NULL,
	[EndOfDayRate] [money] NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_CurrencyRate_CurrencyRateID] PRIMARY KEY CLUSTERED 
(
	[CurrencyRateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [sales].[CurrencyRate] ADD  CONSTRAINT [DF_CurrencyRate_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [sales].[CurrencyRate] ADD  CONSTRAINT [DF_CurrencyRate_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [sales].[CurrencyRate] ADD  CONSTRAINT [DF_CurrencyRate_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [sales].[CurrencyRate] ADD  CONSTRAINT [DF_CurrencyRate_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [sales].[CurrencyRate]  WITH CHECK ADD  CONSTRAINT [FK_CurrencyRate_Currency_FromCurrencyCode] FOREIGN KEY([FromCurrencyCode])
REFERENCES [sales].[Currency] ([CurrencyCode])
GO

ALTER TABLE [sales].[CurrencyRate] CHECK CONSTRAINT [FK_CurrencyRate_Currency_FromCurrencyCode]
GO

ALTER TABLE [sales].[CurrencyRate]  WITH CHECK ADD  CONSTRAINT [FK_CurrencyRate_Currency_ToCurrencyCode] FOREIGN KEY([ToCurrencyCode])
REFERENCES [sales].[Currency] ([CurrencyCode])
GO

ALTER TABLE [sales].[CurrencyRate] CHECK CONSTRAINT [FK_CurrencyRate_Currency_ToCurrencyCode]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for CurrencyRate records.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'COLUMN',@level2name=N'CurrencyRateID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Date and time the exchange rate was obtained.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'COLUMN',@level2name=N'CurrencyRateDate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Exchange rate was converted from this currency code.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'COLUMN',@level2name=N'FromCurrencyCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Exchange rate was converted to this currency code.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'COLUMN',@level2name=N'ToCurrencyCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Average exchange rate for the day.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'COLUMN',@level2name=N'AverageRate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Final exchange rate for the day.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'COLUMN',@level2name=N'EndOfDayRate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'CONSTRAINT',@level2name=N'PK_CurrencyRate_CurrencyRateID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Currency exchange rates.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing Currency.FromCurrencyCode.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'CONSTRAINT',@level2name=N'FK_CurrencyRate_Currency_FromCurrencyCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing Currency.ToCurrencyCode.' , @level0type=N'SCHEMA',@level0name=N'[sales]', @level1type=N'TABLE',@level1name=N'CurrencyRate', @level2type=N'CONSTRAINT',@level2name=N'FK_CurrencyRate_Currency_ToCurrencyCode'
GO

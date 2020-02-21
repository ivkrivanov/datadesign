CREATE TABLE [dbo].[ProductLang] (
    [ID]          INT           IDENTITY (1, 1) NOT NULL,
    [ProductID]   INT           NOT NULL,
    [LanguageID]  INT           NOT NULL,
    [ProductName] NVARCHAR (40) NULL,
    CONSTRAINT [PK_ProductLang] PRIMARY KEY CLUSTERED ([ID] ASC)
);


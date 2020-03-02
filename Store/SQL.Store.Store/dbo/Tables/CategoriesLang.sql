CREATE TABLE [dbo].[CategoriesLang] (
    [ID]           INT            IDENTITY (1, 1) NOT NULL,
    [CategoryID]   INT            NOT NULL,
    [LanguageID]   INT            NOT NULL,
    [CategoryName] NVARCHAR (40)  NULL,
    [Description]  NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_CategoriesLang] PRIMARY KEY CLUSTERED ([ID] ASC)
);


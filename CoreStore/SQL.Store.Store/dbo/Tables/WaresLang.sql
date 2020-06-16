CREATE TABLE [dbo].[WaresLang] (
    [ID]          INT            IDENTITY (1, 1) NOT NULL,
    [WaresID]     INT            NOT NULL,
    [LanguageID]  INT            NOT NULL,
    [WaresName]   NVARCHAR (60)  NULL,
    [Description] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_WaresLang] PRIMARY KEY CLUSTERED ([ID] ASC)
);


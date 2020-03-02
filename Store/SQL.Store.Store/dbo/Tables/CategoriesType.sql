CREATE TABLE [dbo].[CategoriesType] (
    [CategoryTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [Type]           SMALLINT      NOT NULL,
    [CategoryType]   NVARCHAR (30) NOT NULL,
    [InsertDate]     DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]   INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           DEFAULT ((1)) NOT NULL,
    [TenantId]       INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_CategoryType] PRIMARY KEY CLUSTERED ([CategoryTypeID] ASC)
);


GO
CREATE NONCLUSTERED INDEX [CategoryType]
    ON [dbo].[CategoriesType]([CategoryType] ASC);


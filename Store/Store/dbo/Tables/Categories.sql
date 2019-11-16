CREATE TABLE [dbo].[Categories] (
    [CategoryID]     INT           IDENTITY (1, 1) NOT NULL,
    [CategoryTypeID] INT           NOT NULL,
    [CategoryCode]   NVARCHAR (20) NULL,
    [CategoryName]   NVARCHAR (20) NOT NULL,
    [Description]    NTEXT         NULL,
    [Picture]        IMAGE         NULL,
    [InsertDate]     DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]   INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           DEFAULT ((1)) NOT NULL,
    [TenantId]       INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED ([CategoryID] ASC),
    CONSTRAINT [FK_Categories_CategoryTypes] FOREIGN KEY ([CategoryTypeID]) REFERENCES [dbo].[CategoriesType] ([CategoryTypeID])
);


GO
CREATE NONCLUSTERED INDEX [CategoryCode]
    ON [dbo].[Categories]([CategoryCode] ASC);


GO
CREATE NONCLUSTERED INDEX [CategoryName]
    ON [dbo].[Categories]([CategoryName] ASC);


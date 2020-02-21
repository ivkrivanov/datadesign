CREATE TABLE [dbo].[ProductMovement Doc] (
    [ProductMoveID]  INT           NOT NULL,
    [DocumentTypeID] INT           NULL,
    [DocumentNumber] NVARCHAR (10) NULL,
    [DocumentDate]   DATE          NULL,
    CONSTRAINT [PK_ProductMovement Doc] PRIMARY KEY CLUSTERED ([ProductMoveID] ASC),
    CONSTRAINT [FK_ProductMovement Doc_DocumentType] FOREIGN KEY ([DocumentTypeID]) REFERENCES [dbo].[DocumentType] ([DocumentTypeID])
);


CREATE TABLE [dbo].[WaresMovement Doc] (
    [WaresMoveID]    INT           NOT NULL,
    [DocumentTypeID] INT           NULL,
    [DocumentNumber] NVARCHAR (10) NULL,
    [DocumentDate]   DATE          NULL,
    CONSTRAINT [PK_WaresMovement Doc] PRIMARY KEY CLUSTERED ([WaresMoveID] ASC),
    CONSTRAINT [FK_WaresMovement Doc_DocumentType] FOREIGN KEY ([DocumentTypeID]) REFERENCES [dbo].[DocumentType] ([DocumentTypeID])
);


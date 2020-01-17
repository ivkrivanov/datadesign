CREATE TABLE [dbo].[DocumentType] (
    [DocumentTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [DocumentName]   NVARCHAR (50) NOT NULL,
    [InsertDate]     DATETIME      NOT NULL DEFAULT (getdate()),
    [InsertUserId]   INT           NOT NULL DEFAULT ((1)),
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           NULL DEFAULT ((1)),
    [TenantId]       INT           NULL DEFAULT ((1)),
    CONSTRAINT [PK_DocumentType] PRIMARY KEY CLUSTERED ([DocumentTypeID] ASC)
);


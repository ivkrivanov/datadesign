CREATE TABLE [dbo].[DocumentType] (
    [DocumentTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [DocumentName]   NVARCHAR (50) NOT NULL,
    [InsertDate]     DATETIME      NOT NULL,
    [InsertUserId]   INT           NOT NULL,
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           NULL,
    [TenantId]       INT           NULL,
    CONSTRAINT [PK_DocumentType] PRIMARY KEY CLUSTERED ([DocumentTypeID] ASC)
);


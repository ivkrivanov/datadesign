CREATE TABLE [dbo].[OperationType] (
    [OperationTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [OpCode]          SMALLINT      NOT NULL,
    [Operation]       NVARCHAR (30) NOT NULL,
    [InsertDate]      DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME      NULL,
    [UpdateUserId]    INT           NULL,
    [IsActive]        INT           DEFAULT ((1)) NOT NULL,
    [TenantId]        INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_OperationType] PRIMARY KEY NONCLUSTERED ([OperationTypeID] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [OpCode]
    ON [dbo].[OperationType]([OpCode] ASC);


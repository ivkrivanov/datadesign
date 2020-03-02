CREATE TABLE [dbo].[Measures] (
    [MeasureID]    INT           IDENTITY (1, 1) NOT NULL,
    [MeasureName]  NVARCHAR (20) NOT NULL,
    [InsertDate]   DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId] INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]   DATETIME      NULL,
    [UpdateUserId] INT           NULL,
    [IsActive]     INT           DEFAULT ((1)) NOT NULL,
    [TenantId]     INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Measures] PRIMARY KEY CLUSTERED ([MeasureID] ASC)
);


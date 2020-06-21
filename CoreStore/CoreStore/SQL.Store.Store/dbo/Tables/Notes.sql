CREATE TABLE [dbo].[Notes] (
    [NoteID]       BIGINT         IDENTITY (1, 1) NOT NULL,
    [EntityType]   NVARCHAR (100) NOT NULL,
    [EntityID]     BIGINT         NOT NULL,
    [Text]         NVARCHAR (MAX) NOT NULL,
    [InsertUserId] INT            NOT NULL,
    [InsertDate]   DATETIME       NOT NULL,
    CONSTRAINT [PK_Notes] PRIMARY KEY CLUSTERED ([NoteID] ASC)
);


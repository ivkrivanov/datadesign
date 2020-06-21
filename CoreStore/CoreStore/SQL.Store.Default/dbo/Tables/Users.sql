CREATE TABLE [dbo].[Users] (
    [UserId]              INT            IDENTITY (1, 1) NOT NULL,
    [Username]            NVARCHAR (100) NOT NULL,
    [DisplayName]         NVARCHAR (100) NOT NULL,
    [Email]               NVARCHAR (100) NULL,
    [Source]              NVARCHAR (4)   NOT NULL,
    [PasswordHash]        NVARCHAR (86)  NOT NULL,
    [PasswordSalt]        NVARCHAR (10)  NOT NULL,
    [LastDirectoryUpdate] DATETIME       NULL,
    [UserImage]           NVARCHAR (100) NULL,
    [InsertDate]          DATETIME       DEFAULT (getdate()) NOT NULL,
    [InsertUserId]        INT            DEFAULT ((1)) NOT NULL,
    [UpdateDate]          DATETIME       NULL,
    [UpdateUserId]        INT            NULL,
    [IsActive]            SMALLINT       DEFAULT ((1)) NOT NULL,
    [TenantId]            INT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([UserId] ASC)
);


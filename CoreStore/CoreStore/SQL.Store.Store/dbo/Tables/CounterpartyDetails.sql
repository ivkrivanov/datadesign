CREATE TABLE [dbo].[CounterpartyDetails] (
    [ID]              INT            NOT NULL,
    [LastContactDate] DATETIME       NULL,
    [LastContactedBy] INT            NULL,
    [Email]           NVARCHAR (100) NULL,
    [SendBulletin]    BIT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_CounterpartyDetails] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_CounterpartyDetails_LastContactedBy] FOREIGN KEY ([LastContactedBy]) REFERENCES [dbo].[Employees] ([EmployeeID])
);


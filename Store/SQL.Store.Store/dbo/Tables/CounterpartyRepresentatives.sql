CREATE TABLE [dbo].[CounterpartyRepresentatives] (
    [RepresentativeID] INT IDENTITY (1, 1) NOT NULL,
    [CounterpartyID]   INT NOT NULL,
    [EmployeeID]       INT NOT NULL,
    CONSTRAINT [PK_CounterpartyRepresentatives] PRIMARY KEY CLUSTERED ([RepresentativeID] ASC)
);


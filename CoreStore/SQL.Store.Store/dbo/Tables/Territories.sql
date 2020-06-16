CREATE TABLE [dbo].[Territories] (
    [ID]                   INT           IDENTITY (1, 1) NOT NULL,
    [TerritoryID]          NVARCHAR (20) NOT NULL,
    [TerritoryDescription] NVARCHAR (50) NOT NULL,
    [RegionID]             INT           NOT NULL,
    CONSTRAINT [PK_Territories] PRIMARY KEY NONCLUSTERED ([TerritoryID] ASC),
    CONSTRAINT [FK_Territories_Region] FOREIGN KEY ([RegionID]) REFERENCES [dbo].[Region] ([RegionID])
);


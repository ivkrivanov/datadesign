USE [Store_Store_v1]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ivan Ivanov
-- Create date: 12.2.2019
-- Description:	
-- =============================================
CREATE PROCEDURE [dbo].[sp_SetStore] 
	@Position bigint = 0,
    @WaresMode bit = 0, 
    @MoveID int = 0, 
    @ShopID int = 0,
    @WaresID int = 0,
    @Key nvarchar,
	@Date datetime,
	@OperationID int,
    @IncomeQuantity decimal(15,4),
    @IncomeSinglePrice decimal(15,4),
    @IncomeValue decimal(15,4),
    @AIncomeSinglePrice decimal(15,4),
    @AIncomeValue decimal(15,4),
    @ExpenceQuantity decimal(15,4),
    @ExpenceSinglePrice decimal(15,4),
    @ExpenceValue decimal(15,4),
    @AExpenceSinglePrice decimal(15,4),
    @AExpenceValue decimal(15,4),
    @RestQuantity decimal(15,4),
    @RestSinglePrice decimal(15,4),
    @RestValue decimal(15,4),
    @ARestQuantity decimal(15,4),
    @ARestSinglePrice decimal(15,4),
    @ARestValue decimal(15,4),
    @ReCost decimal(15,4),
    @AReCost decimal(15,4),
    @Mistake bit,
    @AMistake bit,
    @InsertDate datetime,
    @InsertUserId int,
    @UpdateDate datetime,
    @UpdateUserId int,
    @IsActive int,
    @TenantId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	INSERT INTO [dbo].[Store]
           ([Position]
           ,[WaresMode]
           ,[MoveID]
           ,[ShopID]
           ,[WaresID]
           ,[Key]
           ,[Date]
           ,[OperationID]
           ,[IncomeQuantity]
           ,[IncomeSinglePrice]
           ,[IncomeValue]
           ,[AIncomeSinglePrice]
           ,[AIncomeValue]
           ,[ExpenceQuantity]
           ,[ExpenceSinglePrice]
           ,[ExpenceValue]
           ,[AExpenceSinglePrice]
           ,[AExpenceValue]
           ,[RestQuantity]
           ,[RestSinglePrice]
           ,[RestValue]
           ,[ARestQuantity]
           ,[ARestSinglePrice]
           ,[ARestValue]
           ,[ReCost]
           ,[AReCost]
           ,[Mistake]
           ,[AMistake]
           ,[InsertDate]
           ,[InsertUserId]
           ,[UpdateDate]
           ,[UpdateUserId]
           ,[IsActive]
           ,[TenantId])
     VALUES (
	        @Position
            ,@WaresMode 
            ,@MoveID
            ,@ShopID
            ,@WaresID
            ,@Key
		    ,@Date 
			,@OperationID 
			,@IncomeQuantity 
			,@IncomeSinglePrice 
			,@IncomeValue 
			,@AIncomeSinglePrice 
			,@AIncomeValue 
			,@ExpenceQuantity 
			,@ExpenceSinglePrice 
			,@ExpenceValue 
			,@AExpenceSinglePrice 
			,@AExpenceValue 
			,@RestQuantity 
			,@RestSinglePrice 
			,@RestValue 
			,@ARestQuantity 
			,@ARestSinglePrice 
			,@ARestValue 
			,@ReCost 
			,@AReCost 
			,@Mistake 
			,@AMistake 
			,@InsertDate 
			,@InsertUserId 
			,@UpdateDate 
			,@UpdateUserId 
			,@IsActive 
			,@TenantId )

END
GO

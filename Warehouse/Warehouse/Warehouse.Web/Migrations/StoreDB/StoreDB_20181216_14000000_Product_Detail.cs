
namespace Warehouse.Migrations.StoreDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(2018121614000000)]
    public class StoreDB_20181216_14000000_Product_Detail : AutoReversingMigration
    {
        public override void Up()
        {
            //Alter.Table("Customers")
            //    .AlterColumn("CustomerID").AsString(14).NotNullable();

            //Alter.Table("Suppliers")
            //    .AddColumn("SupplierSTAT").AsString(14).NotNullable().WithDefaultValue(00000000000000);

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Product Details")
                .WithColumn("DetailID").AsInt32().Identity().NotNullable()
                .WithColumn("ProductID").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductDetail_Product","Products","ProductID")
                .WithColumn("ItemID").AsInt32().NotNullable()
                    .ForeignKey("FK_ProductDetail+Item", "Items", "ItemID")
                .WithColumn("Quantity").AsFloat().NotNullable()
                .WithColumn("ProductQuantity").AsFloat().NotNullable().WithDefaultValue(1.0)
                .WithColumn("Reduction").AsFloat().NotNullable().WithDefaultValue(1.0)
                .WithColumn("PlanPrice").AsCurrency().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}

namespace Warehouse.Migrations.StoreDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;
    [Migration(20181212140000)]
    public class StoreDB_20181212_140000:AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Categories")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)   
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Alter.Table("Employees")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Alter.Table("Customers")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Alter.Table("Shippers")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Alter.Table("Suppliers")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Alter.Table("Orders")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Alter.Table("Order Details")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Alter.Table("Products")
                .AddColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .AddColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

        }
    }
}
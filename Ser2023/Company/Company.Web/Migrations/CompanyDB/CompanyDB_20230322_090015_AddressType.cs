namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090015)]
    public class CompanyDB_20230322_090015_AddressType : AutoReversingMigration
    {
        public override void Up()
        {

            this.Create.Table("AddressType").InSchema("address")
                .WithColumn("AddressTypeId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(50).Nullable()
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Index("IX_AddressType_rowguid_Name")
                .OnTable("AddressType").InSchema("address")
                .OnColumn("rowguid").Ascending()
                .OnColumn("Name").Ascending();

            Create.Index("IX_AddressType_AddressTypeID")
                .OnTable("AddressType").InSchema("address")
                .OnColumn("AddressTypeId").Ascending()
                .OnColumn("Name").Ascending()
                .WithOptions().Unique();

            Insert.IntoTable("AddressType").InSchema("address").Row(new
            {
                Name = "Billing"
            });

            Insert.IntoTable("AddressType").InSchema("address").Row(new
            {
                Name = "Home"
            });

            Insert.IntoTable("AddressType").InSchema("address").Row(new
            {
                Name = "Main Office"
            });

            Insert.IntoTable("AddressType").InSchema("address").Row(new
            {
                Name = "Primary"
            });

            Insert.IntoTable("AddressType").InSchema("address").Row(new
            {
                Name = "Shipping"
            });

            Insert.IntoTable("AddressType").InSchema("address").Row(new
            {
                Name = "Archive"
            });
        }
    }
} 

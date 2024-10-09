namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using FluentMigrator.SqlServer;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090015)]
    public class CompanyDB_20230322_090015_AddressType : AutoReversingMigration
    {
        public override void Up()
        {
<<<<<<< HEAD
            Create.Table("AddressType").InSchema("person")
                .WithColumn("AddressTypeId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(50).Indexed().Nullable()
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Index("IX_AddressType_rowguid_Name")
                .OnTable("AddressType").InSchema("person")
                .OnColumn("rowguid").Ascending()
                .OnColumn("Name").Ascending();

            Create.Index("IX_AddressType_AddressTypeID")
                .OnTable("AddressType").InSchema("person")
                .OnColumn("AddressTypeId").Ascending()
                .OnColumn("Name").Ascending()
                .WithOptions().Unique();

            Insert.IntoTable("AddressType").InSchema("person").Row(new
            {
                Name = "Billing"
            });

            Insert.IntoTable("AddressType").InSchema("person").Row(new
            {
                Name = "Home"
            });

            Insert.IntoTable("AddressType").InSchema("person").Row(new
            {
                Name = "Main Office"
            });

            Insert.IntoTable("AddressType").InSchema("person").Row(new
            {
                Name = "Primary"
            });

            Insert.IntoTable("AddressType").InSchema("person").Row(new
            {
                Name = "Shipping"
            });

            Insert.IntoTable("AddressType").InSchema("person").Row(new
            {
                Name = "Archive"
            });
=======

            //this.Create.Table("AddressType").InSchema("person")
            //    .WithColumn("AddressTypeId").AsInt64().Identity(1,1).NotNullable().PrimaryKey()
            //    .WithColumn("Name").AsString(50).NotNullable()

            //    .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
            //    .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
            //    .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
            //    .WithColumn("UpdateDate").AsDateTime().Nullable()
            //    .WithColumn("UpdateUserId").AsInt32().Nullable()
            //    .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
            //    .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            //Create.Index("IX_AddressType_rowguid_Name")
            //    .OnTable("AddressType").InSchema("person")
            //    .OnColumn("rowguid").Ascending()
            //    .OnColumn("Name").Ascending();

            //Create.Index("IX_AddressType_AddressTypeID")
            //    .OnTable("AddressType").InSchema("person")
            //    .OnColumn("AddressTypeId").Ascending()
            //    .OnColumn("Name").Ascending()
            //    .WithOptions().Unique();

            //Insert.IntoTable("AddressType").InSchema("person").Row(new
            //{
            //    Name = "Billing"
            //});

            //Insert.IntoTable("AddressType").InSchema("person").Row(new
            //{
            //    Name = "Home"
            //});

            //Insert.IntoTable("AddressType").InSchema("person").Row(new
            //{
            //    Name = "Main Office"
            //});

            //Insert.IntoTable("AddressType").InSchema("person").Row(new
            //{
            //    Name = "Primary"
            //});

            //Insert.IntoTable("AddressType").InSchema("person").Row(new
            //{
            //    Name = "Shipping"
            //});

            //Insert.IntoTable("AddressType").InSchema("person").Row(new
            //{
            //    Name = "Archive"
            //});
>>>>>>> revert
        }
    }
} 

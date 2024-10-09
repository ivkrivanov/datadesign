namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using FluentMigrator.SqlServer;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090030)]
    public class CompanyDB_20230322_090030_BusinessEntityAddress : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("BusinessEntityAddress").InSchema("person")
<<<<<<< HEAD
                .WithColumn("BusinessEntityId").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_BusinessEntityAddress_BusinessEntity", "person", "BusinessEntity", "BusinessEntityId")             
                .WithColumn("AddressId").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_BusinessEntityAddress_Address", "person", "Address", "AddressId")
                .WithColumn("AddressTypeId").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_BusinessEntityAddress_AddressType", "person", "AddressType", "AddressTypeId")
=======
                .WithColumn("BusinessEntityId").AsInt64().NotNullable().PrimaryKey()
                .WithColumn("AddressId").AsInt64().NotNullable().PrimaryKey()
                .WithColumn("AddressTypeId").AsInt64().NotNullable().PrimaryKey()

>>>>>>> revert
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Index("IX_BusinessEntityAddress_rowguid")
                .OnTable("BusinessEntityAddress").InSchema("person")
                .OnColumn("rowguid").Ascending()
                .OnColumn("AddressTypeId").Ascending()
                .OnColumn("AddressId").Ascending();
        }
    }
} 

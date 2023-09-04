namespace Address.Migrations.AddressDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090030)]
    public class AddressDB_20230322_090030_BusinessEntityAddress : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("BusinessEntityAddress").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().NotNullable()
                    .ForeignKey("FK_BusinessEntityAddress_BusinessEntity", "person", "BusinessEntity", "BusinessEntityId")             
                .WithColumn("AddressId").AsInt64().NotNullable()
                    .ForeignKey("FK_BusinessEntityAddress_Address", "address", "Address", "AddressId")
                .WithColumn("AddressTypeId").AsInt64().NotNullable()
                    .ForeignKey("FK_BusinessEntityAddress_AddressType", "address", "AddressType", "AddressTypeId")
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime(2020, 1, 1))
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
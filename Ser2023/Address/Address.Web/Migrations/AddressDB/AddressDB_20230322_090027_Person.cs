namespace Address.Migrations.AddressDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090027)]
    public class AddressDB_20230322_090027_Person : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Person").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().NotNullable()
                    .ForeignKey("FK_Person_BusinessEntity", "person", "BusinessEntity", "BusinessEntityId")
                .WithColumn("PersonType").AsString(2).NotNullable()
                .WithColumn("Title").AsString(8).Nullable()
                .WithColumn("FirstName").AsString(50).NotNullable()
                .WithColumn("MiddleName").AsString(50).Nullable()
                .WithColumn("LastName").AsString(50).NotNullable()
                .WithColumn("Suffix").AsString(10).Nullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime(2020,1,1))
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
} 

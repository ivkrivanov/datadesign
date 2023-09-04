namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090027)]
    public class CompanyDB_20230322_090027_Person : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Person").InSchema("person")
                //.WithColumn("PersonId").AsInt64().PrimaryKey().Identity().NotNullable()
                .WithColumn("BusinessEntityId").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_Person_BusinessEntity_BusinessEntityID", "person", "BusinessEntity", "BusinessEntityId")
                //.WithColumn("PersonType").AsString(50).NotNullable()
                .WithColumn("Title").AsString(8).Nullable()
                .WithColumn("FirstName").AsString(50).NotNullable()
                .WithColumn("MiddleName").AsString(50).Nullable()
                .WithColumn("LastName").AsString(50).NotNullable()
                .WithColumn("Suffix").AsString(10).Nullable()
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
} 
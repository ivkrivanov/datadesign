namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090045)]
    public class CompanyDB_20230322_090045_BusinessEntityContact : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("BusinessEntityContact").InSchema("person")
                .WithColumn("[BusinessEntityID]").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_BusinessEntityContact_BusinessEntity_BusinessEntityID", "person", "BusinessEntity", "BusinessEntityId")
                .WithColumn("PersonId").AsInt64().PrimaryKey().NotNullable()
                    //.ForeignKey("FK_BusinessEntityContact_Person_PersonID", "person", "Person", "BusinessEntityId")
                .WithColumn("ContactTypeId").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_BusinessEntityContact_ContactType_ContactTypeID", "person", "ContactType", "ContactTypeId")
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

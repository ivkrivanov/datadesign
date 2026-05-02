namespace Address.Migrations.AddressDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090045)]
    public class AddressDB_20230322_090045_BusinessEntityContact : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("BusinessEntityContact").InSchema("person")
                .WithColumn("[BusinessEntityID]").AsInt64().NotNullable()
                    .ForeignKey("FK_BusinessEntityContact_BusinessEntity", "person", "BusinessEntity", "BusinessEntityId")
                .WithColumn("PersonId").AsInt64().NotNullable()
                    //.ForeignKey("FK_BusinessEntityContact_Person", "person", "Person", "BusinessEntityId")
                .WithColumn("ContactTypeId").AsInt64().NotNullable()
                    .ForeignKey("FK_BusinesEntityContact_ContactType", "person", "ContactType", "ContactTypeId")
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime())
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
} 

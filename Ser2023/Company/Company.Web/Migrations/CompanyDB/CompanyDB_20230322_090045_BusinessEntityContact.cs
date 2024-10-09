namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using FluentMigrator.SqlServer;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090045)]
    public class CompanyDB_20230322_090045_BusinessEntityContact : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("BusinessEntityContact").InSchema("person")
                .WithColumn("[BusinessEntityID]").AsInt64().NotNullable().PrimaryKey()
                .WithColumn("PersonId").AsInt64().NotNullable().PrimaryKey()
                .WithColumn("ContactTypeId").AsInt64().NotNullable().PrimaryKey()

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

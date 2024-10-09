namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;
    using FluentMigrator.SqlServer;
    using Serenity.Extensions;
    using System;

    [Migration(20231124163000)]
    public class CompanyDB_20231124_163000_PersonPhone : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PersonPhone").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().NotNullable().PrimaryKey()
                .WithColumn("PhoneNumber").AsString(15).NotNullable().PrimaryKey()
                .WithColumn("PhoneNumberTypeId").AsInt64().NotNullable().PrimaryKey()

                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}

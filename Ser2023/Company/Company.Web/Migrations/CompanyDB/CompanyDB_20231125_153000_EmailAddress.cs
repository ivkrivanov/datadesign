namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;
    using FluentMigrator.SqlServer;
    using Serenity.Extensions;
    using System;

    [Migration(20231125153000)]
    public class CompanyDB_20231125_153000_EmailAddress : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("EmailAddress").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().NotNullable().PrimaryKey()
                .WithColumn("EmailAddressId").AsInt64().Identity(1,1).NotNullable().PrimaryKey()
                .WithColumn("EmailAddress").AsString(50).Nullable()

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

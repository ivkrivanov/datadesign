namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;
    using FluentMigrator.Builder.Create.Index;
    using Serenity.Extensions;
    using System;

    [Migration(20230503150000)]
    public class CompanyDB_20230503_150000_EmailAddress : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("EmailAddress").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_EmailAddress_Person_BusinessEntityId", "person", "BusinessEntity", "BusinessEntityId")
                .WithColumn("EmailAddressId").AsInt64().PrimaryKey().Identity().NotNullable()
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

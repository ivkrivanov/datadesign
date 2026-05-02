namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;
    using FluentMigrator.Builder.Create.Index;
    using Serenity.Extensions;
    using System;

    [Migration(20230503150010)]
    public class CompanyDB_20230503_150010_PersonPhone: AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PersonPhone").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().PrimaryKey().NotNullable()
                    .ForeignKey("FK_PersonPhone_Person_BusinessEntityId", "person", "BusinessEntity", "BusinessEntityId")
                .WithColumn("PhoneNumber").AsString(15).PrimaryKey().NotNullable()
                .WithColumn("PhoneNumberTypeId").AsInt64().NotNullable()
                    .ForeignKey("FK_PersonPhone_PhoneNumberType_PhoneNumberTypeID", "person", "PhoneNumberType", "PhoneNumberTypeId")
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

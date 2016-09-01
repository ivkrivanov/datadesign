using FluentMigrator;
using System;

namespace Ledger.Migrations.DefaultDB
{
    [Migration(20160316150000)]
    public class DefaultDB_20160725_210000_Categories : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ldg");

            Create.Table("Categories").InSchema("ldg")
                .WithColumn("CategoryId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CategoryCode").AsString(4).NotNullable()
                .WithColumn("CategoryType").AsInt16().NotNullable()
                .WithColumn("CategoryName").AsString(15).NotNullable()
                .WithColumn("Description").AsString(255).Nullable()
                .WithColumn("Picture").AsString(255).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Table("Addresses").InSchema("ldg")
                .WithColumn("AddressId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Address").AsString(256).Nullable()
                .WithColumn("ZipCode").AsString(128).Nullable()
                .WithColumn("City").AsString(256).Nullable()
                .WithColumn("State").AsString(256).Nullable()
                .WithColumn("Country").AsString(64).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Table("Emails").InSchema("ldg")
                .WithColumn("EmailId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("EmailAddress").AsString(128).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Table("Phones").InSchema("ldg")
                .WithColumn("PhoneId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("PhoneNumber").AsString(256).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1); 

            Create.Table("Notes").InSchema("ldg")
                .WithColumn("NoteID").AsInt64().PrimaryKey().Identity().NotNullable()
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Table("Currencies").InSchema("ldg")
                .WithColumn("CurrencyId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Code").AsString(4).NotNullable()
                .WithColumn("Description").AsString(100).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}
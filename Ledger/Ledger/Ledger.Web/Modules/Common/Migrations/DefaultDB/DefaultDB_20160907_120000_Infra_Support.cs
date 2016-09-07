
namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using System;

    [Migration(20160907120000)]
    public class DefaultDB_20160907_120000_Infra_Support : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SupportType").InSchema("ldg")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("DisplayName").AsString(256).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("SupportTypeString").InSchema("ldg")
                .WithColumn("EnumLocaleId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("EnumValue").AsInt32().PrimaryKey().Nullable()
                .WithColumn("DisplayName").AsString(256).Nullable()
                .WithColumn("Locale").AsInt32().Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("Support").InSchema("ldg")
                .WithColumn("SupportID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Guid").AsGuid().WithDefaultValue(Guid.NewGuid()).NotNullable()
                .WithColumn("SupportType").AsInt32().NotNullable()
                .WithColumn("SupportCode").AsString(6).Nullable()
                .WithColumn("Name").AsString(128).NotNullable()
                .WithColumn("Description").AsString(256).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
        }
    }
}

namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20160907120000)]
    public class DefaultDB_20160907_120000_Infra_Support : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addSupportTypeCols = expr => expr
                .WithColumn("EnumName").AsString(256).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportTypeCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportType")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable());

            addSupportTypeCols(IfDatabase("oracle")
                .Create.Table("SupportType")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable());

            //Utils.AddOracleIdentity(this, "SupportType", "EnumValue");

            Action<ICreateTableWithColumnSyntax> addSupportTypeStringCols = expr => expr
                .WithColumn("EnumValue").AsInt32().Nullable()
                .WithColumn("DisplayName").AsString(256).Nullable()
                .WithColumn("Locale").AsInt32().Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportTypeStringCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportTypeString").InSchema("ldg")
                .WithColumn("EnumLocaleID").AsInt32().Identity().PrimaryKey().NotNullable());

            addSupportTypeStringCols(IfDatabase("oracle")
                .Create.Table("SupportTypeString").InSchema("ldg")
                .WithColumn("EnumLocaleID").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SupportTypeString", "EnumLocaleID");

        }
    }
}
namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20160908120000)]
    public class DefaultDB_20160908_120000_Infra_Support : AutoReversingMigration
    {
        public override void Up()
        {

            Action<ICreateTableWithColumnSyntax> addSupportCols = expr => expr
                .WithColumn("Guid").AsGuid().WithDefaultValue(Guid.NewGuid()).NotNullable()
                .WithColumn("SupportTypeID").AsInt32().NotNullable()
                .WithColumn("SupportCode").AsString(6).Nullable()
                .WithColumn("Name").AsString(128).NotNullable()
                .WithColumn("Description").AsString(256).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Support").InSchema("ldg")
                .WithColumn("SupportID").AsInt32().Identity().PrimaryKey().NotNullable());

            addSupportCols(IfDatabase("oracle")
                .Create.Table("Support").InSchema("ldg")
                .WithColumn("SupportID").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Support", "SupportID");

        }
    }
}
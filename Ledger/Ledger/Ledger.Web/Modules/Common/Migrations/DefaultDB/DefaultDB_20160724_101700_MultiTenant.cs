namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20160724101700)]
    public class DefaultDB_20160724_101700_MultiTenant : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addTenantCols = expr => expr
                .WithColumn("TenantName").AsString(100).NotNullable();

            addTenantCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Tenants")
                .WithColumn("TenantId").AsInt32().Identity().PrimaryKey().NotNullable());

            addTenantCols(IfDatabase("oracle")
                .Create.Table("Tenants")
                .WithColumn("TenantId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Tenants", "TenantId");

            Insert.IntoTable("Tenants").Row(new { TenantName = "Primary	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Second	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Third	Tenant" });

            Alter.Table("Users").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Roles").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Languages").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}

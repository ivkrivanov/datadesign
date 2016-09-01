using FluentMigrator;


namespace Ledger.Migrations.DefaultDB
{
    [Migration(20160724101700)]
    public class DefaultDB_20160724_101700_MultiTenant : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Tenants")
                .WithColumn("TenantId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("TenantName").AsString(100).NotNullable();
            Insert.IntoTable("Tenants").Row(new { TenantName = "Primary	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Second	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Third	Tenant" });
            Alter.Table("Users").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Roles").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Languages").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}

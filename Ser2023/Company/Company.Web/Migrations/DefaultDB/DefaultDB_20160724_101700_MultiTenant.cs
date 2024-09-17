namespace Company.Migrations.DefaultDB
{
    using FluentMigrator;
    using Serenity.Extensions;

    [Migration(20160724101700)]
    public class CompanyDB_20230407_100000_MultiTenantPatch : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Tenants", "TenantId", s => s.WithColumn("TenantName")
                .AsString(100).NotNullable());
            Insert.IntoTable("Tenants").Row(new { TenantName = "Primary	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Second	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Third	Tenant" });

            Alter.Table("Users").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Roles").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Languages").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}

namespace AdvStore.Migrations.DefaultDB
{
   using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20200724101700)]
    public class DefaultDB_20200724_101700_MultiTenant : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Tenants", "TenantId", s => s.WithColumn("TenantName").AsString(100).NotNullable());
            Insert.IntoTable("Tenants").Row(new { TenantName = "Primary	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Second	Tenant" });
            Insert.IntoTable("Tenants").Row(new { TenantName = "Third	Tenant" });
            Alter.Table("Users").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Roles").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("Languages").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}

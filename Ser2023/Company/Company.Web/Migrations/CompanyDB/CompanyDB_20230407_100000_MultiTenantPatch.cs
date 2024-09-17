namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;

    [Migration(20230407100000)]
    public class CompanyDB_20230407_100000_MultiTenantPatch : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Country").InSchema("address").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
            Alter.Table("StateProvince").InSchema("address").AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}

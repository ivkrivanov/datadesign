using FluentMigrator;

namespace Serene1.Migrations.NorthwindDB
{
    [Migration(20150914094500)]
    public class NorthwindDB_20150914_094500_MultiTenant: AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Employees")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Employees\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Categories")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Categories\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Customers")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Customers\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Shippers")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Shippers\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Suppliers")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Suppliers\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Orders")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Orders\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Products")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Products\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Region")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Region\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);

            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("Territories")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
            IfDatabase("oracle")
                .Alter.Table("\"Territories\"")
                    .AddColumn("TenantId").AsInt32()
                        .NotNullable().WithDefaultValue(1);
        }
    }
}

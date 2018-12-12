
namespace Warehouse.Migrations.StoreDB
{
    using FluentMigrator;

    [Migration(20181212143000)]
    public class StoreDB_20181212_143000_DataLocalization : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CategoryLang")
                    .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                    .WithColumn("CategoryID").AsInt32().NotNullable()
                    .WithColumn("LanguageID").AsInt32().NotNullable()
                    .WithColumn("CategoryName").AsString(15).Nullable()
                    .WithColumn("Description").AsString(int.MaxValue).Nullable();

            IfDatabase("Oracle")
                .Create.Table("CategoryLang")
                    .WithColumn("ID").AsInt32().PrimaryKey().NotNullable()
                    .WithColumn("CategoryID").AsInt32().NotNullable()
                    .WithColumn("LanguageID").AsInt32().NotNullable()
                    .WithColumn("CategoryName").AsString(15).Nullable()
                    .WithColumn("Description").AsString(int.MaxValue).Nullable();

            Utils.AddOracleIdentity(this, "CategoryLang", "ID");

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("ProductLang")
                    .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                    .WithColumn("ProductID").AsInt32().NotNullable()
                    .WithColumn("LanguageID").AsInt32().NotNullable()
                    .WithColumn("ProductName").AsString(40).Nullable();

            IfDatabase("Oracle")
                .Create.Table("ProductLang")
                    .WithColumn("ID").AsInt32().PrimaryKey().NotNullable()
                    .WithColumn("ProductID").AsInt32().NotNullable()
                    .WithColumn("LanguageID").AsInt32().NotNullable()
                    .WithColumn("ProductName").AsString(40).Nullable();

            Utils.AddOracleIdentity(this, "ProductLang", "ID");
        }
    }
}
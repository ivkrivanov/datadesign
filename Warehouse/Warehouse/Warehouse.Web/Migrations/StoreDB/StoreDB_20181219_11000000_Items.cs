
namespace Warehouse.Migrations.StoreDB
{
    using FluentMigrator;

    [Migration(2018121911000000)]
    public class StoreDB_20181219_11000000_Items : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("ItemLang")
                    .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                    .WithColumn("ItemID").AsInt32().NotNullable()
                    .WithColumn("LanguageID").AsInt32().NotNullable()
                    .WithColumn("ItemName").AsString(40).Nullable();

            IfDatabase("Oracle")
                    .Create.Table("ItemLang")
                        .WithColumn("ID").AsInt32().PrimaryKey().NotNullable()
                        .WithColumn("ItemID").AsInt32().NotNullable()
                        .WithColumn("LanguageID").AsInt32().NotNullable()
                        .WithColumn("ItemName").AsString(40).Nullable();

            Utils.AddOracleIdentity(this, "ItemLang", "ID");
        }
    }
}
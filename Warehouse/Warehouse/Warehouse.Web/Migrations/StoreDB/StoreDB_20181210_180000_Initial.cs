
namespace Warehouse.Migrations.StoreDB
{
    using FluentMigrator;

    [Migration(20181210180000)]
    public class StoreDB_20181210_180000_Initial : Migration
    {
        public override void Up()
        {
            IfDatabase("SqlServer", "SqlServer2000", "SqlServerCe")
                .Execute.EmbeddedScript("Warehouse.Migrations.StoreDB.StoreDB_ScriptSqlServer.sql");
        }
        public override void Down()
        {
        }
    }
}
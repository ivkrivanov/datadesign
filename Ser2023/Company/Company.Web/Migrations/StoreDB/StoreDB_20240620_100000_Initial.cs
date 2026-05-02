using FluentMigrator;
using System.IO;

namespace Company.Migrations.StoreDB;

[Migration(20240520_100000)]
public class StoreDB_20240620_100000_Initial:Migration
{
    private string GetScript(string name)
    {
        using var sr = new StreamReader(GetType().Assembly.GetManifestResourceStream(name));
        return sr.ReadToEnd();
    }

    public override void Up()
    {
        IfDatabase("SQLServer", "SqlServer2000", "SqlServerCe")
            .Execute.Sql(GetScript("Company.Web.Migrations.StoreDB.StoreDBScript_SqlServer.sql"));
    }

    public override void Down() { }

}

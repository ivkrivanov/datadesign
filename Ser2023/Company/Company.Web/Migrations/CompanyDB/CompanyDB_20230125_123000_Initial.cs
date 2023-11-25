namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;
    using FluentMigrator.SqlServer;
    using Serenity.Extensions;
    using System;
    using System.IO;

    [Migration(20230125123000)]
    public class CompanyDB_20230125_123000_Initial : Migration
    {
        private string GetScript(string name)
        {
            using var sr = new StreamReader(GetType().Assembly.GetManifestResourceStream(name));
            return sr.ReadToEnd();
        }

        public override void Up()
        {
            IfDatabase("SQLServer", "SqlServer2000", "SqlServerCe")
                .Execute.Sql(GetScript("Company.Web.Migrations.CompanyDB.CompanyDBScript_SqlServer.sql"));

            //IfDatabase("Postgres")
            //    .Execute.Sql(GetScript("Company.Web.Migrations.CompanyDB.CompanyDBScript_Postgres.sql"));

            //IfDatabase("Postgres")
            //    .Execute.Sql(GetScript("Company.Web.Migrations.CompanyDB.CompanyDBScript_PostgresData.sql"));

            //IfDatabase("MySql")
            //    .Execute.Sql(GetScript("Company.Web.Migrations.CompanyDB.CompanyDBScript_MySql.sql"));

            //IfDatabase("Oracle")
            //    .Execute.Sql(GetScript("Company.Web.Migrations.CompanyDB.CompanyDBScript_Oracle.sql"));
        }


        public override void Down()
        {
        }
    }
}

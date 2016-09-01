
namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using System;

    [Migration(20160804120000)]
    public class DefaultDB_20160804_120000_HR_Pach : Migration
    {
        public override void Up()
        {
            Delete.ForeignKey("FK_Employees_Addresses").OnTable("Employees").InSchema("ldg");
            Delete.ForeignKey("FK_Employees_Email").OnTable("Employees").InSchema("ldg");
            Delete.ForeignKey("FK_Employees_Phone").OnTable("Employees").InSchema("ldg");

            Delete.Column("AddressId").FromTable("Employees").InSchema("ldg");
            Delete.Column("EmailId").FromTable("Employees").InSchema("ldg");
            Delete.Column("PhoneId").FromTable("Employees").InSchema("ldg");

            Delete.Column("UpdateUserId").FromTable("Notes").InSchema("ldg");
            Delete.Column("UpdateDate").FromTable("Notes").InSchema("ldg");

        }

        public override void Down()
        {
            throw new NotImplementedException();
        }
    }
}

namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20180531120000)]
    public class DefaultDB_20180531_120000_Fix : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("EmployeesAddresses").InSchema("ldg")
                .AddColumn("AddressTypeId").AsInt16().Nullable();
        }


    }
}
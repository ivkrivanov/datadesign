using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Store.Migrations.StoreDB
{
    using FluentMigrator;
    [Migration(20181213140000)]
    public class StoreDB_20181213_140000_CustomerDetails : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CustomerDetails")
                    .WithColumn("ID").AsInt32().PrimaryKey().NotNullable()
                    .WithColumn("LastContactDate").AsDateTime().Nullable()
                    .WithColumn("LastContactedBy").AsInt32().Nullable()
                        .ForeignKey("FK_CustomerDetails_LastContactedBy", "Employees", "EmployeeID")
                    .WithColumn("Email").AsString(100).Nullable()
                    .WithColumn("SendBulletin").AsBoolean().NotNullable().WithDefaultValue(true);

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table(",")
                    .WithColumn("RepresentativeID").AsInt32().PrimaryKey().Identity().NotNullable()
                    .WithColumn("CustomerID").AsInt32().NotNullable()
                    .WithColumn("EmployeeID").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("CustomerRepresentatives")
                    .WithColumn("RepresentativeID").AsInt32().PrimaryKey().NotNullable()
                    .WithColumn("CustomerID").AsInt32().NotNullable()
                    .WithColumn("EmployeeID").AsInt32().NotNullable();

            Utils.AddOracleIdentity(this, "CustomerRepresentatives", "RepresentativeID");
        
        }
    }
}
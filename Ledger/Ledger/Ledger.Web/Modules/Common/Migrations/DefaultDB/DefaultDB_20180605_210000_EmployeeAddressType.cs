namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20180605_210000)]
    public class DefaultDB_20180605_210000_EmployeeAddressType : AutoReversingMigration
    {
        public override void Up()
        {
            //Delete.Column("AddressType").FromTable("EmployeesAddresses").InSchema("ldg");

            Action<ICreateTableWithColumnSyntax> addEmplAddressTypeCols = expr => expr
                
                .WithColumn("EmplAddressType").AsString(50).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addEmplAddressTypeCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("EmplAddressType").InSchema("ldg")
                .WithColumn("EmplAddressTypeId").AsInt32().Identity().PrimaryKey().NotNullable()
                .ForeignKey("FK_EmployeesAddresses_EmplAddressType", "ldg", "EmployeesAddresses", "EmployeeAddressId"));

            addEmplAddressTypeCols(IfDatabase("oracle")
                .Create.Table("EmplAddressType").InSchema("ldg")
                .WithColumn("EmplAddressTypeId").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_EmployeesAddresses_EmplAddressType", "ldg", "EmployeesAddresses", "EmployeeAddressId"));

            Utils.AddOracleIdentity(this, "EmployeesAddresses", "EmplAddressTypeId");
        }
    }
}
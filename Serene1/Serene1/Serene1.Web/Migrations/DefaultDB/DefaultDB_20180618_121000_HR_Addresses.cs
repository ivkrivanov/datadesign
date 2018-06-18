namespace Serene1.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20180618121000)]
    public class DefaultDB_20180618_121000_HR_Addresses : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addEmployeeAddressCols = expr => expr
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    //.ForeignKey("FK_EmployeeAddress_Employee", "ldg", "Employees", "EmployeeId")
                .WithColumn("AddressId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeesAddresses_Addresses", "ldg", "Addresses", "AddressId")
                .WithColumn("AddressTypeId").AsInt16().Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addEmployeeAddressCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("EmployeesAddresses").InSchema("ldg")
                    .WithColumn("EmployeeAddressId").AsInt32().Identity().PrimaryKey().NotNullable());

            addEmployeeAddressCols(IfDatabase("oracle")
                .Create.Table("EmployeesAddresses").InSchema("ldg")
                    .WithColumn("EmployeeAddressId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "EmployeesAddresses", "EmployeeAddressId");

            Action<ICreateTableWithColumnSyntax> addAddressTypeCols = expr => expr
                .WithColumn("EnumName").AsString(256).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addAddressTypeCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("AddressType").InSchema("ldg")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable());

            addAddressTypeCols(IfDatabase("oracle")
                .Create.Table("AddressType").InSchema("ldg")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SupportType", "EnumValue");

            Action<ICreateTableWithColumnSyntax> addAddressTypeStringCols = expr => expr
                .WithColumn("EnumValue").AsInt32().Nullable()
                .WithColumn("DisplayName").AsString(256).Nullable()
                .WithColumn("Language").AsInt32().Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addAddressTypeStringCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("AddressTypeString").InSchema("ldg")
                .WithColumn("EnumLocaleID").AsInt32().Identity().PrimaryKey().NotNullable());

            addAddressTypeStringCols(IfDatabase("oracle")
                .Create.Table("AddressTypeString").InSchema("ldg")
                .WithColumn("EnumLocaleID").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SupportTypeString", "EnumLocaleID");
        }
    }
}
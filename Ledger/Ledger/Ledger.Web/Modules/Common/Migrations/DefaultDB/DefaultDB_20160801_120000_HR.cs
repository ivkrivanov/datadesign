
namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20160801120000)]
    public class DefaultDB_20160801_120000_HR : AutoReversingMigration
    {
        public override void Up()
        {
            #region Employee

            Action<ICreateTableWithColumnSyntax> addEmployeesCols = expr => expr
                .WithColumn("FirstName").AsString(50).Nullable()
                .WithColumn("MiddleName").AsString(50).NotNullable()
                .WithColumn("SurName").AsString(50).Nullable()
                .WithColumn("Gender").AsByte().NotNullable()
                .WithColumn("EGN").AsString().NotNullable()
                .WithColumn("HireDate").AsDateTime().Nullable()
                .WithColumn("LengthOfService").AsDateTime().Nullable()
                .WithColumn("Photo").AsString(255).Nullable()
                .WithColumn("Notes").AsString(255).Nullable()
                .WithColumn("Salary").AsDouble().Nullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            addEmployeesCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Employees").InSchema("ldg")
                    .WithColumn("EmployeeId").AsInt32().Identity().PrimaryKey().NotNullable());

            addEmployeesCols(IfDatabase("oracle")
                .Create.Table("Employees").InSchema("ldg")
                    .WithColumn("EmployeeId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Employees", "EmployeeId");

            #endregion Employee

            #region EmployeeAddress

            Action<ICreateTableWithColumnSyntax> addEmployeeAddressCols = expr => expr
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeAddress_Employee", "ldg", "Employees", "EmployeeId")
                .WithColumn("AddressId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeAddress_Address", "ldg", "Addresses", "AddressId")
                .WithColumn("AddressType").AsString(50).NotNullable()
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

            #endregion EmployeeAddress

            #region EmployeeEmail

            Action<ICreateTableWithColumnSyntax> addEmployeeEmailCols = expr => expr
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeEmail_Employee", "ldg", "Employees", "EmployeeId")
                .WithColumn("EmailId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeEmail_Email", "ldg", "Emails", "EmailId")
                .WithColumn("EmailType").AsString(50).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addEmployeeEmailCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("EmployeesEmails").InSchema("ldg")
                    .WithColumn("EmployeeEmailId").AsInt32().Identity().PrimaryKey().NotNullable());

            addEmployeeEmailCols(IfDatabase("oracle")
                .Create.Table("EmployeesEmails").InSchema("ldg")
                    .WithColumn("EmployeeEmailId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "EmployeesEmails", "EmployeeEmailId");

            #endregion EmployeeEmail

            #region EmployeePhone

            Action<ICreateTableWithColumnSyntax> addEmployeePhoneCols = expr => expr
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeePhone_Employee", "ldg", "Employees", "EmployeeId")
                .WithColumn("PhoneId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeePhone_Phone", "ldg", "Phones", "PhoneId")
                .WithColumn("PhoneType").AsString(50).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addEmployeePhoneCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("EmployeesPhones").InSchema("ldg")
                    .WithColumn("EmployeePhoneId").AsInt32().Identity().PrimaryKey().NotNullable());

            addEmployeePhoneCols(IfDatabase("oracle")
                .Create.Table("EmployeesPhones").InSchema("ldg")
                    .WithColumn("EmployeePhoneId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "EmployeesPhones", "EmployeePhoneId");

            #endregion EmployeePhone
        }
    }
}
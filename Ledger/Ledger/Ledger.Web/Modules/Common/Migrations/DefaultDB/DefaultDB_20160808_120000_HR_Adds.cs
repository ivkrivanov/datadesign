
namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using System;

    [Migration(20160808120000)]
    public class DefaultDB_20160808_120000_HR_Adds : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("EmployeesAddresses").InSchema("ldg")
                .WithColumn("EmployeeAddressId").AsInt32().Identity().PrimaryKey().NotNullable()
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

            Create.Table("EmployeesEmails").InSchema("ldg")
                .WithColumn("EmployeeEmailId").AsInt32().Identity().PrimaryKey().NotNullable()
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

            Create.Table("EmployeesPhones").InSchema("ldg")
                .WithColumn("EmployeePhoneId").AsInt32().Identity().PrimaryKey().NotNullable()
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
        }
    }
}
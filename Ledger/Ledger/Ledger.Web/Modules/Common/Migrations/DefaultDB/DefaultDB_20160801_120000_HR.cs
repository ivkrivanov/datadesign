
namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using System;

    [Migration(20160801120000)]
    public class DefaultDB_20160801_120000_HR : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Employees").InSchema("ldg")
                .WithColumn("EmployeeId").AsInt32().Identity()
                    .PrimaryKey().NotNullable()
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
                .WithColumn("AddressId").AsInt32().Nullable()
                    .ForeignKey("FK_Employees_Addresses", "ldg", "Addresses", "AddressId")
                .WithColumn("EmailId").AsInt32().NotNullable()
                    .ForeignKey("FK_Employees_Email", "ldg", "Emails", "EmailId")
                .WithColumn("PhoneId").AsInt32().NotNullable()
                    .ForeignKey("FK_Employees_Phone", "ldg", "Phones", "PhoneId")
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}
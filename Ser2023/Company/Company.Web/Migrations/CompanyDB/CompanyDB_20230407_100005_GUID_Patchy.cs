namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;
    using System;

    [Migration(20230407100005)]
    public class CompanyDB_20230407_100005_MultiTenantPatch : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Address").InSchema("address").AlterColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(Guid.NewGuid());
            Alter.Table("AddressType").InSchema("address").AlterColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(Guid.NewGuid());
            Alter.Table("StateProvince").InSchema("address").AlterColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(Guid.NewGuid());
            Alter.Table("BusinessEntity").InSchema("person").AlterColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(Guid.NewGuid());
            Alter.Table("BusinessEntityAddress").InSchema("person").AlterColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(Guid.NewGuid());
            Alter.Table("BusinessEntityContact").InSchema("person").AlterColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(Guid.NewGuid());
            Alter.Table("Person").InSchema("person").AlterColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(Guid.NewGuid());
        }
    }
}

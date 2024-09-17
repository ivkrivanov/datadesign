namespace Company.Migrations.CompanyDB
{
    using FluentMigrator;
    using System;

    [Migration(20230322090010)]
    public class CompanyDB_20230322_090010_StateProvince : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("StateProvince").InSchema("person")
                .WithColumn("StateProvinceId").AsInt64().Identity().PrimaryKey().Identity().NotNullable()
                .WithColumn("StateProvinceCode").AsString(5).NotNullable()
                .WithColumn("CountryCode").AsString(3).NotNullable().Indexed()
                    .ForeignKey("FK_StateProvince_Country", "person", "Country", "CountryCode")
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("TerritoryId").AsInt32().NotNullable()
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
} 

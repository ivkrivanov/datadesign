namespace Address.Migrations.AddressDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090010)]
    public class AddressDB_20230322_090010_StateProvince : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("StateProvince").InSchema("address")
                .WithColumn("StateProvinceId").AsInt32().Identity()
                    .PrimaryKey().NotNullable()
                .WithColumn("StateProvinceCode").AsString(5).NotNullable()
                .WithColumn("CountryCode").AsString(3).NotNullable()
                    .ForeignKey("FK_StateProvince_Country", "address", "Country", "CountryCode")
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("TerritoryId").AsInt32().NotNullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime(2020, 1, 1))
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
                //.WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
} 

namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using FluentMigrator.Infrastructure;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090020)]
    public class CompanyDB_20230322_090020_Address : AutoReversingMigration
    {
        public override void Up()
        {

            this.Create.Table("Address").InSchema("address")
                .WithColumn("AddressId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("AddressLine1").AsString(60).NotNullable()
                .WithColumn("AddressLine2").AsString(60).Nullable()
                .WithColumn("City").AsString(30).NotNullable()
                .WithColumn("StateProvinceId").AsInt32().NotNullable()
                    .ForeignKey("FK_Address_StateProvince", "address", "StateProvince", "StateProvinceId")
                .WithColumn("PostalCode").AsString(15).NotNullable()
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Index("IX_AddressId_rowguid_AddressId")
               .OnTable("Address").InSchema("address")
               .OnColumn("rowguid").Ascending()
               .OnColumn("AddressId").Ascending()
               .WithOptions().Unique();
        }
    }
} 

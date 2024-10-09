namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using FluentMigrator.SqlServer;
    using FluentMigrator.Infrastructure;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090020)]
    public class CompanyDB_20230322_090020_Address : AutoReversingMigration
    {
        public override void Up()
        {
<<<<<<< HEAD
            Create.Table("Address").InSchema("person")
                .WithColumn("AddressId").AsInt64().Identity().PrimaryKey().NotNullable()
=======

            this.Create.Table("Address").InSchema("person")
                .WithColumn("AddressId").AsInt64().Identity(1,1).PrimaryKey().NotNullable()
>>>>>>> revert
                .WithColumn("AddressLine1").AsString(60).NotNullable()
                .WithColumn("AddressLine2").AsString(60).Nullable()
                .WithColumn("City").AsString(30).NotNullable()
                .WithColumn("StateProvinceId").AsInt64().NotNullable()
<<<<<<< HEAD
                    .ForeignKey("FK_Address_StateProvince_StateProvinceID", "person", "StateProvince", "StateProvinceId")
=======
                    .ForeignKey("FK_Address_StateProvince", "person", "StateProvince", "StateProvinceId")
>>>>>>> revert
                .WithColumn("PostalCode").AsString(15).NotNullable()
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Index("IX_AddressId_rowguid_AddressId")
               .OnTable("Address").InSchema("person")
               .OnColumn("rowguid").Ascending()
               .OnColumn("AddressId").Ascending()
               .WithOptions().Unique();
        }
    }
} 

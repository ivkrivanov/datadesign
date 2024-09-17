namespace Company.Migrations.AddressDB
{
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322150000)]
    public class CompanyDB_20230322_150000_Address : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Schema("address");

            this.Create.Schema("person");

            Create.Table("Country").InSchema("address")
                .WithColumn("CountryId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("CountryCode").AsString(3).NotNullable().PrimaryKey()
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime(2020, 1, 1))
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "AD",
                Name = "Andorra"
            });

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AE",
            //    Name = "United Arab Emirates"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AF",
            //    Name = "Afghanistan"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AG",
            //    Name = "Antigua and Barbuda"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AI",
            //    Name = "Anguilla"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AL",
            //    Name = "Albania"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AM",
            //    Name = "Armenia"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AN",
            //    Name = "Netherlands Antilles"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AO",
            //    Name = "Angola"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AQ",
            //    Name = "Antarctica"
            //});

            //Insert.IntoTable("Country").InSchema("Address").Row(new
            //{
            //    CountryCode = "AR",
            //    Name = "Argentina"
            //});

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "",
                Name = ""
            });


            Create.Table("StateProvince").InSchema("address")
                .WithColumn("StateProvinceId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("StateProvinceCode").AsString(5).NotNullable()
                .WithColumn("CountryId").AsInt32().NotNullable().ForeignKey()
                    //.ForeignKey("FK_StateProvince_Country", "address", "Country", "CountryId")
                .WithColumn("CountryCode").AsString(3).NotNullable()
                    .ForeignKey("FK_StateProvince_Country", "address", "Country", "CountryCode")
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("TerritoryId").AsInt32().NotNullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime())
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            //Create.ForeignKey("FK_StateProvince_Country").FromTable("StateProvince").InSchema("address").ForeignColumn("CountryId")
            //    .ToTable("Country").InSchema("address").PrimaryColumn("CountryId");

            this.Create.Table("AddressType").InSchema("address")
                .WithColumn("AddressTypeId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(50).Nullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime())
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);


            Create.Index("IX_AddressType_AddressTypeID")
                .OnTable("AddressType").InSchema("address")
                .OnColumn("AddressTypeId").Ascending()
                .OnColumn("Name").Ascending()
                .WithOptions().Unique();

            this.Create.Table("Address").InSchema("address")
                .WithColumn("AddressId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("AddressLine1").AsString(60).NotNullable()
                .WithColumn("AddressLine2").AsString(60).Nullable()
                .WithColumn("City").AsString(30).NotNullable()
                .WithColumn("StateProvinceId").AsInt32().NotNullable()
                .WithColumn("PostalCode").AsString(15).NotNullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime())
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.ForeignKey().FromTable("Address").InSchema("address").ForeignColumn("StateProvinceId")
                .ToTable("StateProvince").InSchema("address").PrimaryColumn("StateProvinceId");

            Create.Index("IX_AddressId")
                .OnTable("Address").InSchema("address")
                .OnColumn("AddressId").Ascending()
                .WithOptions().Unique();

            Create.Table("BusinessEntity").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().PrimaryKey().NotNullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime())
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Table("BusinessEntityAddress").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().NotNullable()
                .WithColumn("AddressId").AsInt64().NotNullable()
                .WithColumn("AddressTypeId").AsInt64().NotNullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime())
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.ForeignKey().FromTable("BusinessEntityAddress").InSchema("person").ForeignColumn("BusinessEntityId")
                .ToTable("BusinessEntity").InSchema("person").PrimaryColumn("BusinessEntityId");

            Create.ForeignKey().FromTable("BusinessEntityAddress").InSchema("person").ForeignColumn("AddressId")
                .ToTable("Address").InSchema("address").PrimaryColumn("AddressId");

            Create.ForeignKey().FromTable("BusinessEntityAddress").InSchema("person").ForeignColumn("AddressTypeId")
                .ToTable("AddressType").InSchema("address").PrimaryColumn("AddressTypeId");

        }
    }
}


namespace Address.Migrations.AddressDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090000)]
    public class AddressDB_20230322_090000_Country : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Schema("address");

            Create.Table("Country").InSchema("address")
                .WithColumn("CountryCode").AsString(3)
                    .PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime(2020, 1, 1))
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
            //.WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Create.Index("IX_CountryCode")
                .OnTable("Country").InSchema("address")
                .OnColumn("CountryCode").Ascending()
                .OnColumn("Name").Ascending();


            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AD",
                Name = "Andorra"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AE",
                Name = "United Arab Emirates"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AF",
                Name = "Afghanistan"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AG",
                Name = "Antigua and Barbuda"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AI",
                Name = "Anguilla"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AL",
                Name = "Albania"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AM",
                Name = "Armenia"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AN",
                Name = "Netherlands Antilles"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AO",
                Name = "Angola"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AQ",
                Name = "Antarctica"
            });

            Insert.IntoTable("Country").InSchema("address").Row(new
            {
                CountryCode = "AR",
                Name = "Argentina"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "AS",
                Name = "American Samoa"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "AT",
                Name = "Austria"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "AU",
                Name = "Australia"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "AW",
                Name = "Aruba"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "AZ",
                Name = "Azerbaijan"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BA",
                Name = "Bosnia and Herzegovina"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BB",
                Name = "Barbados"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BD",
                Name = "Bangladesh"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BE",
                Name = "Belgium"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BF",
                Name = "Burkina Faso"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BG",
                Name = "Bulgaria"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BH",
                Name = "Bahrain"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BI",
                Name = "Burundi"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BJ",
                Name = "Benin"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BM",
                Name = "Bermuda"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BN",
                Name = "Brunei"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BO",
                Name = "Bolivia"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BR",
                Name = "Brazil"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BS",
                Name = "Bahamas, The"
            });

            Insert.IntoTable("Country").InSchema("Address").Row(new
            {
                CountryCode = "BT",
                Name = "Bhutan"
            });
        }
    }
} 
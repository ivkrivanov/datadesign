namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090035)]
    public class CompanyDB_20230322_090035_ContactType : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("ContactType").InSchema("person")
                .WithColumn("ContactTypeId").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("rowguid").AsGuid().Nullable().WithDefaultValue(SystemMethods.NewGuid)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(SystemMethods.CurrentDateTime)
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Accounting Manager"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Assistant Sales Agent"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Assistant Sales Representative"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Coordinator Foreign Markets"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Export Administrator"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "International Marketing Manager"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Marketing Assistant"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Marketing Manager"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Marketing Representative"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Order Administrator"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Owner"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Owner/Marketing Assistant"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Product Manager"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Purchasing Agent"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Regional Account Representative"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Sales Agent"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Sales Associate"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Sales Manager"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Sales Representative"
            });

        }
    }
} 

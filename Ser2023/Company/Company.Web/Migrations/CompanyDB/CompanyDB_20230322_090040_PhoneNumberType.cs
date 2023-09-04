namespace Company.Migrations.CompanyDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090040)]
    public class CompanyDB_20230322_090040_PhoneNumberType : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("PhoneNumberType").InSchema("person")
                .WithColumn("PhoneNumberTypeID").AsInt64().Identity().PrimaryKey().NotNullable()
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
                Name = "Cell"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Home"
            });
            Insert.IntoTable("ContactType").InSchema("person").Row(new
            {
                Name = "Work"
            });









        }
    }
} 
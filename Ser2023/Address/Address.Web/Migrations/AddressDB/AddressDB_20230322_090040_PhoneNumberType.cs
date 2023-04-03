namespace Address.Migrations.AddressDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090040)]
    public class AddressDB_20230322_090040_PhoneNumberType : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("PhoneNumberType").InSchema("person")
                .WithColumn("[PhoneNumberTypeID]").AsInt64().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(50).NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime(2020, 1, 1))
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

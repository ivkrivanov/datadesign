namespace Address.Migrations.AddressDB
{ 
    using FluentMigrator;
    using Serenity.Extensions;
    using System;

    [Migration(20230322090025)]
    public class AddressDB_20230322_090025_BusinessEntity : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Schema("person");

            Create.Table("BusinessEntity").InSchema("person")
                .WithColumn("BusinessEntityId").AsInt64().PrimaryKey().NotNullable()
                .WithColumn("rowguid").AsGuid().NotNullable().WithDefaultValue(new Guid())
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(new DateTime(2020, 1, 1))
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
} 

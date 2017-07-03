namespace Store.Migrations.StoreDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20170703120000)]
    public class StoreDB_20170703_120000_Address : AutoReversingMigration
    {
        public override void Up()
        {
            #region Address
            this.CreateTableWithId64("Address", "AddressId", s => s
                .WithColumn("Address").AsString(256).Nullable()
                .WithColumn("ZipCode").AsString(128).Nullable()
                .WithColumn("City").AsString(256).Nullable()
                .WithColumn("State").AsString(256).Nullable()
                .WithColumn("CountryId").AsInt16().Nullable()
                    //.ForeignKey("FK_Address_Country", "Countries", "CountryId")

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1));
            #endregion Address
        }
    }
}
namespace Serene1.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20180618120000)]
    public class DefaultDB_20180618_120000_Infra_Addresses : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("ldg");

            Action<ICreateTableWithColumnSyntax> addAddressCols = s => s
                .WithColumn("Address").AsString(256).Nullable()
                .WithColumn("ZipCode").AsString(128).Nullable()
                .WithColumn("City").AsString(256).Nullable()
                .WithColumn("State").AsString(256).Nullable()
                .WithColumn("Country").AsString(64).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            addAddressCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Addresses").InSchema("ldg")
                    .WithColumn("AddressId").AsInt32().Identity().PrimaryKey().NotNullable());

            addAddressCols(IfDatabase("oracle")
                .Create.Table("Addresses").InSchema("ldg")
                    .WithColumn("AddressId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Addresses", "AddressId");
        }
    }
}

namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20180603_200000)]
    public class DefaultDB_20180603_200000_InfraNotesPatch : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Notes").InSchema("ldg")
                .AddColumn("UpdateUserId").AsInt32().Nullable()
                .AddColumn("UpdateDate").AsDateTime().Nullable()
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .AddColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
        }
    }
}
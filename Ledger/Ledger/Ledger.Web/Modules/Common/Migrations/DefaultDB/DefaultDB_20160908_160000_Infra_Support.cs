namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20160908160000)]
    public class DefaultDB_20160908_160000_Infra_Support : AutoReversingMigration
    {
        public override void Up()
        {

            Create.ForeignKey("FK_Support_SupportTypeString")
                .FromTable("Support").InSchema("ldg")
                .ForeignColumn("SupportTypeID")
                .ToTable("SupportTypeString").InSchema("ldg")
                .PrimaryColumn("EnumLocaleID");
        }
    }
}
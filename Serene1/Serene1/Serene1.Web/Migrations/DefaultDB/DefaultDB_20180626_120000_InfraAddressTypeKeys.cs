namespace Serene1.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20180626120000)]
    public class DefaultDB_20180626_120000_InfraAddressTypeKeys : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("AddressTypeString").InSchema("ldg")
                .AlterColumn("EnumValue").AsInt32().Nullable()
                .ForeignKey("FK_AddressTypeString_AddressType", "ldg", "AddressType", "EnumValue");

        }
    }
}
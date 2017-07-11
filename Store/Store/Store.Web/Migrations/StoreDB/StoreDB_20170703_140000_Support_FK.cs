
namespace Store.Migrations.StoreDB
{
    using FluentMigrator;
    
    [Migration(20170703140000)]
    public class StoreDB_20170703_140000_Support_FK: AutoReversingMigration
    {
        public override void Up()
        {
            Create.ForeignKey("FK_SupportTypeString_SupportType")
                .FromTable("SupportTypeString")
                .ForeignColumn("EnumValue")
                .ToTable("SupportType")
                .PrimaryColumn("EnumValue");

            Create.ForeignKey("FK_Support_SuportTypeString")
                .FromTable("Support")
                .ForeignColumn("SupportTypeID")
                .ToTable("SupportTypeString")
                .PrimaryColumn("EnumLocaleID");
        }
    }
}

namespace Store.Migrations.StoreDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20181213150000)]
    public class StoreDB_20181213_150000_Notes : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addCols = expr => expr
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            addCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Notes")
                    .WithColumn("NoteID").AsInt64().PrimaryKey().Identity().NotNullable());

            addCols(IfDatabase("Oracle")
                .Create.Table("Notes")
                    .WithColumn("NoteID").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Notes", "NoteID");
        }
    }
}
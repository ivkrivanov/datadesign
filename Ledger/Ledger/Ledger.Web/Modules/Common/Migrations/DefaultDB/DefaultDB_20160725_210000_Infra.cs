namespace Ledger.Migrations.DefaultDB
{
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;
    using System;

    [Migration(20160725210000)]
    public class DefaultDB_20160725_210000_Infra : AutoReversingMigration
    {
        public override void Up()
        {
            //Create.Schema("ldg");

            #region Categories

            //Action<ICreateTableWithColumnSyntax> addCategoriesCols = expr => expr
            //    .WithColumn("CategoryCode").AsString(4).NotNullable()
            //    .WithColumn("CategoryType").AsInt32().NotNullable()
            //    .WithColumn("CategoryName").AsString(15).NotNullable()
            //    .WithColumn("Description").AsString(255).Nullable()
            //    .WithColumn("Picture").AsString(255).Nullable()
            //    .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
            //    .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
            //    .WithColumn("UpdateUserId").AsInt32().Nullable()
            //    .WithColumn("UpdateDate").AsDateTime().Nullable()
            //    .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
            //    .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            //addCategoriesCols(IfDatabase(Utils.AllExceptOracle)
            //    .Create.Table("Categories").InSchema("ldg")
            //        .WithColumn("CategoryId").AsInt32().Identity().PrimaryKey().NotNullable());

            //addCategoriesCols(IfDatabase("oracle")
            //    .Create.Table("Categories").InSchema("ldg")
            //        .WithColumn("CategoryId").AsInt32().PrimaryKey().NotNullable());

            //Utils.AddOracleIdentity(this, "Categories", "CategoryId");

            #endregion Categories

            #region Address

            Action<ICreateTableWithColumnSyntax> addAddressCols = expr => expr
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

            #endregion Address

            #region Emails

            Action<ICreateTableWithColumnSyntax> addEmailsCols = expr => expr
               .WithColumn("EmailAddress").AsString(128).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            addEmailsCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Emails").InSchema("ldg")
                    .WithColumn("EmailId").AsInt32().Identity().PrimaryKey().NotNullable());

            addEmailsCols(IfDatabase("oracle")
                .Create.Table("Emails").InSchema("ldg")
                    .WithColumn("EmailId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Emails", "EmailId");

            #endregion Emails

            #region Phones

            Action< ICreateTableWithColumnSyntax> addPhonesCols = expr => expr
                .WithColumn("PhoneNumber").AsString(256).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1);

            addPhonesCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Phones").InSchema("ldg")
                    .WithColumn("PhoneId").AsInt32().Identity().PrimaryKey().NotNullable());

            addPhonesCols(IfDatabase("oracle")
                .Create.Table("Phones").InSchema("ldg")
                    .WithColumn("PhoneId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Phones", "PhoneId");

            #endregion Phones

            #region Notes

            Action<ICreateTableWithColumnSyntax> addNotesCols = expr => expr
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            addNotesCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Notes").InSchema("ldg")
                    .WithColumn("NoteID").AsInt64().PrimaryKey().Identity().NotNullable());

            addNotesCols(IfDatabase("oracle")
                .Create.Table("Notes").InSchema("ldg")
                    .WithColumn("NoteID").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Notes", "NoteID");

            #endregion Notes

            #region SupportType

            Action<ICreateTableWithColumnSyntax> addSupportTypeCols = expr => expr
                .WithColumn("EnumName").AsString(256).Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportTypeCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportType").InSchema("ldg")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable());

            addSupportTypeCols(IfDatabase("oracle")
                .Create.Table("SupportType").InSchema("ldg")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable());

            //Utils.AddOracleIdentity(this, "SupportType", "EnumValue");

            #endregion SupportType

            #region SupportTypeString

            Action<ICreateTableWithColumnSyntax> addSupportTypeStringCols = expr => expr
                .WithColumn("EnumValue").AsInt32().Nullable()
                .WithColumn("DisplayName").AsString(256).Nullable()
                .WithColumn("Locale").AsInt32().Nullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportTypeStringCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportTypeString").InSchema("ldg")
                .WithColumn("EnumLocaleID").AsInt32().Identity().PrimaryKey().NotNullable());

            addSupportTypeStringCols(IfDatabase("oracle")
                .Create.Table("SupportTypeString").InSchema("ldg")
                .WithColumn("EnumLocaleID").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SupportTypeString", "EnumLocaleID");

            #endregion SupportTypeString

            #region Support

            Action<ICreateTableWithColumnSyntax> addSupportCols = expr => expr
                .WithColumn("Guid").AsGuid().WithDefaultValue(Guid.NewGuid()).NotNullable()
                .WithColumn("SupportTypeID").AsInt32().NotNullable()
                    .ForeignKey("FK_Support_SupportType", "ldg", "SupportTypeString", "EnumLocaleID")
                .WithColumn("SupportCode").AsString(6).Nullable()
                .WithColumn("Name").AsString(128).NotNullable()
                .WithColumn("Description").AsString(256).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Support").InSchema("ldg")
                .WithColumn("SupportID").AsInt32().Identity().PrimaryKey().NotNullable());

            addSupportCols(IfDatabase("oracle")
                .Create.Table("Support").InSchema("ldg")
                .WithColumn("SupportID").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Support", "SupportID");

            #endregion Support

        }
    }
}
namespace Store.Migrations.DefaultDB
{
    using System;
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;

    [Migration(20170703130000)]
    public class DefaultDB_20170703_130000_Support : AutoReversingMigration
    {
           
        public override void Up()
        {
            #region Schema
            //Create.Schema("infra");
            #endregion

            #region SupportType
            Action<ICreateTableWithColumnSyntax> addSupportTypeCols = expr => expr
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("EnumName").AsString(256).Nullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable();

            addSupportTypeCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportType").InSchema ("infra")
                .WithColumn("SupportTypeId").AsInt32().PrimaryKey().Identity().NotNullable());

            addSupportTypeCols(IfDatabase("oracle")
                .Create.Table("SupportType").InSchema("infra")
                .WithColumn("SupportTypeId").AsInt32().PrimaryKey().Identity().NotNullable());

            Utils.AddOracleIdentity(this, "SupportType", "EnumValue");

            #endregion

            #region SupportTypeString
            Action<ICreateTableWithColumnSyntax> addSupportTypeStringCols = expr => expr
                .WithColumn("EnumValue").AsInt32().Nullable()
                    //.ForeignKey("FK_SupportTypeString_SupportType", "infra", "SupportType", "SupportTypeId")
                .WithColumn("DisplayName").AsString(256).Nullable()
                .WithColumn("LanguageId").AsInt32().Nullable()
                    .ForeignKey("FK_SupportTypeString_Languages", "dbo", "Languages", "Id")
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportTypeStringCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportTypeString").InSchema("infra")
                .WithColumn("EnumLocaleId").AsInt32().Identity().PrimaryKey().NotNullable());

            addSupportTypeStringCols(IfDatabase("oracle")
                .Create.Table("SupportTypeString").InSchema("infra")
                .WithColumn("EnumLocaleId").AsInt32().Identity().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SupportTypeString", "EnumLocaleID");
            #endregion

            #region Support
            Action<ICreateTableWithColumnSyntax> addSupportCols = expr => expr
                .WithColumn("SupportGuid").AsGuid().WithDefaultValue(Guid.NewGuid()).NotNullable()
                .WithColumn("SupportTypeID").AsInt32().NotNullable()
                    .ForeignKey("FK_Support_SupportTypeString", "infra", "SupportTypeString", "EnumLocaleId")
                .WithColumn("SupportCode").AsString(6).Nullable()
                .WithColumn("SupportName").AsString(128).NotNullable()
                .WithColumn("SupportDescription").AsString(256).NotNullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Support").InSchema("infra")
                .WithColumn("SupportId").AsInt32().Identity().PrimaryKey().NotNullable());

            addSupportCols(IfDatabase("oracle")
                .Create.Table("Support").InSchema("infra")
                .WithColumn("SupportId").AsInt32().Identity().PrimaryKey().NotNullable());
            #endregion


            #region Fill SupportType
            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 0,
                EnumName = "InvalidSupportingTableType",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 1,
                EnumName = "CustomerGroup",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 2,
                EnumName = "VendorGroup",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 3,
                EnumName = "CreditRating",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 4,
                EnumName = "ItemGroup",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 5,
                EnumName = "UnitOfMeasure",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 6,
                EnumName = "ShippingTerm",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 7,
                EnumName = "ShippingMethod",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 9,
                EnumName = "PaymentTerm",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 10,
                EnumName = "PriceLevel",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 11,
                EnumName = "JobGroup",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 12,
                EnumName = "Class",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 13,
                EnumName = "Documents",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 15,
                EnumName = "SalesTaxGroup",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 16,
                EnumName = "PurchaseTaxGroup",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 17,
                EnumName = "ItemTaxGroup",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 18,
                EnumName = "TaxCode",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 19,
                EnumName = "CreditCardType",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 20,
                EnumName = "PayType",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 21,
                EnumName = "Reminders",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 24,
                EnumName = "CommonComments",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 25,
                EnumName = "Currency",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 26,
                EnumName = "Category1099",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 27,
                EnumName = "KeyStore",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 28,
                EnumName = "UserCredentialStore",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 29,
                EnumName = "Bank",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 30,
                EnumName = "OfxSession",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 31,
                EnumName = "OnlineSessionCode",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 32,
                EnumName = "OnlineAccountServiceStatus",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 33,
                EnumName = "ResultObject",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 35,
                EnumName = "DriverRegistration",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 36,
                EnumName = "PaymentMethod",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 37,
                EnumName = "FiscalYear",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 38,
                EnumName = "BankingMethod",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 39,
                EnumName = "PayrollGenerationNumber",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 40,
                EnumName = "Country",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 41,
                EnumName = "MemorizedDocument",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 42,
                EnumName = "MemorizedDocumentReminder",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 43,
                EnumName = "IntrastatCommodityCode",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 44,
                EnumName = "IntrastatTransactionCode",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 45,
                EnumName = "ExtendedReminder",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1, IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 50,
                EnumName = "NameSuffix",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 51,
                EnumName = "NamePrefix",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 52,
                EnumName = "Channel",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 53,
                EnumName = "ECommerceProvider",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 60,
                EnumName = "Book",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 63,
                EnumName = "ChartOfAccount",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportType").InSchema("infra").Row(new
            {
                EnumValue = 64,
                EnumName = "BudgetCode",
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            #endregion

            #region Fill SupportTypeString

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 0,
                DisplayName = "InvalidSupportingTableType",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 1,
                DisplayName = "CustomerGroup",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 2,
                DisplayName = "VendorGroup",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 3,
                DisplayName = "CreditRating",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 4,
                DisplayName = "ItemGroup",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 5,
                DisplayName = "UnitOfMeasure",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 6,
                DisplayName = "ShippingTerm",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 7,
                DisplayName = "ShippingMethod",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 9,
                DisplayName = "PaymentTerm",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 10,
                DisplayName = "PriceLevel",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 11,
                DisplayName = "JobGroup",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 12,
                DisplayName = "Class",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 13,
                DisplayName = "Documents",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 15,
                DisplayName = "SalesTaxGroup",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 16,
                DisplayName = "PurchaseTaxGroup",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 17,
                DisplayName = "ItemTaxGroup",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 18,
                DisplayName = "TaxCode",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 19,
                DisplayName = "CreditCardType",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 20,
                DisplayName = "PayType",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 21,
                DisplayName = "Reminders",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 24,
                DisplayName = "CommonComments",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 25,
                DisplayName = "Currency",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 26,
                DisplayName = "Category1099",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 27,
                DisplayName = "KeyStore",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 28,
                DisplayName = "UserCredentialStore",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 29,
                DisplayName = "Bank",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 30,
                DisplayName = "OfxSession",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 31,
                DisplayName = "OnlineSessionCode",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 32,
                DisplayName = "OnlineAccountServiceStatus",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 33,
                DisplayName = "ResultObject",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 35,
                DisplayName = "DriverRegistration",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 36,
                DisplayName = "PaymentMethod",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 37,
                DisplayName = "FiscalYear",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 38,
                DisplayName = "BankingMethod",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 39,
                DisplayName = "PayrollGenerationNumber",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 40,
                DisplayName = "Country",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 41,
                DisplayName = "MemorizedDocument",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 42,
                DisplayName = "MemorizedDocumentReminder",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 43,
                DisplayName = "IntrastatCommodityCode",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 44,
                DisplayName = "IntrastatTransactionCode",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 45,
                DisplayName = "ExtendedReminder",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 50,
                DisplayName = "NameSuffix",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 51,
                DisplayName = "NamePrefix",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 52,
                DisplayName = "Channel",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 53,
                DisplayName = "ECommerceProvider",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 60,
                DisplayName = "Book",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 63,
                DisplayName = "ChartOfAccount",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 64,
                DisplayName = "BudgetCode",
                LanguageId = 1,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });


            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 0,
                DisplayName = "Невалиден информационен тип",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 1,
                DisplayName = "Група купувачи",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 2,
                DisplayName = "Група доставчици",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 3,
                DisplayName = "Кредитен рейтинг",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 4,
                DisplayName = "Групи стоки",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 5,
                DisplayName = "Мерни единици",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 6,
                DisplayName = "Срокове за доставка",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 7,
                DisplayName = "Метод на доставка",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 9,
                DisplayName = "Срок за плащане",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 10,
                DisplayName = "Ценово ниво",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 11,
                DisplayName = "JobGroup",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 12,
                DisplayName = "Class",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 13,
                DisplayName = "Документи",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 15,
                DisplayName = "Данъчна група продажби",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 16,
                DisplayName = "Данъчна група покупки",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 17,
                DisplayName = "Данъчна група стоки",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 18,
                DisplayName = "Данъчен код",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 19,
                DisplayName = "CreditCardType",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 20,
                DisplayName = "Тип на плащане",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 21,
                DisplayName = "Reminders",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 24,
                DisplayName = "CommonComments",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 25,
                DisplayName = "Валута",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 26,
                DisplayName = "Category1099",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 27,
                DisplayName = "KeyStore",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 28,
                DisplayName = "UserCredentialStore",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 29,
                DisplayName = "Bank",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 30,
                DisplayName = "OfxSession",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 31,
                DisplayName = "OnlineSessionCode",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 32,
                DisplayName = "OnlineAccountServiceStatus",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 33,
                DisplayName = "ResultObject",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 35,
                DisplayName = "DriverRegistration",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 36,
                DisplayName = "Метод на плащане",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 37,
                DisplayName = "FiscalYear",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 38,
                DisplayName = "BankingMethod",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 39,
                DisplayName = "PayrollGenerationNumber",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 40,
                DisplayName = "Държави/Региони",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 41,
                DisplayName = "MemorizedDocument",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 42,
                DisplayName = "MemorizedDocumentReminder",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 43,
                DisplayName = "IntrastatCommodityCode",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 44,
                DisplayName = "IntrastatTransactionCode",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 45,
                DisplayName = "ExtendedReminder",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 50,
                DisplayName = "Наставка на името",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 51,
                DisplayName = "Титла",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 52,
                DisplayName = "Channel",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 53,
                DisplayName = "ECommerceProvider",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 60,
                DisplayName = "Папка",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 63,
                DisplayName = "Сметкоплан",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SupportTypeString").InSchema("infra").Row(new
            {
                EnumValue = 64,
                DisplayName = "Бюджет тип",
                LanguageId = 12,
                InsertUserId = 1,
                InsertDate = new DateTime(2014, 1, 1),
                TenantId = 1,
                IsActive = 1
            });

            #endregion
        }
    }
}
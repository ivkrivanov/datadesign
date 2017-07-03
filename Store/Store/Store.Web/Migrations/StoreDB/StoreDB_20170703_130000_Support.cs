namespace Store.Migrations.StoreDB
{
    using System;
    using FluentMigrator;
    using FluentMigrator.Builders.Create.Table;

    [Migration(20170703130000)]
    public class StoreDB_20170703_130000_Support : AutoReversingMigration
    {
           
        public override void Up()
        {
            this.CreateTableWithId64("Support", "SupportId", s => s
                .WithColumn("SupportGuid").AsGuid().WithDefaultValue(Guid.NewGuid()).NotNullable()
                .WithColumn("SupportTypeID").AsInt32().NotNullable()
                    .ForeignKey("FK_Suport_TypeId", "SuportTypes", "SuportTypeId")
                .WithColumn("SupportCode").AsString(6).Nullable()
                .WithColumn("SupportName").AsString(128).NotNullable()
                .WithColumn("SupportDescription").AsString(256).NotNullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable());

            Action<ICreateTableWithColumnSyntax> addSupportTypeCols = expr => expr
                .WithColumn("EnumName").AsString(256).Nullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportTypeCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportType")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable()
                    .ForeignKey("FK_SupportType_EnumValue", "Enumeration", "EnumValue"));

            addSupportTypeCols(IfDatabase("oracle")
                .Create.Table("SupportType")
                .WithColumn("EnumValue").AsInt32().PrimaryKey().NotNullable()
                    .ForeignKey("FK_SupportType_EnumValue", "Enumeration", "EnumValue"));

            Utils.AddOracleIdentity(this, "SupportType", "EnumValue");

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 0,
                EnumName = "InvalidSupportingTableType"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 1,
                EnumName = "CustomerGroup"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 2,
                EnumName = "VendorGroup"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 3,
                EnumName = "CreditRating"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 4,
                EnumName = "ItemGroup"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 5,
                EnumName = "UnitOfMeasure"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 6,
                EnumName = "ShippingTerm"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 7,
                EnumName = "ShippingMethod"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 9,
                EnumName = "PaymentTerm"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 10,
                EnumName = "PriceLevel"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 11,
                EnumName = "JobGroup"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 12,
                EnumName = "Class"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 13,
                EnumName = "Documents"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 15,
                EnumName = "SalesTaxGroup"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 16,
                EnumName = "PurchaseTaxGroup"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 17,
                EnumName = "ItemTaxGroup"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 18,
                EnumName = "TaxCode"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 19,
                EnumName = "CreditCardType"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 20,
                EnumName = "PayType"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 21,
                EnumName = "Reminders"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 24,
                EnumName = "CommonComments"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 25,
                EnumName = "Currency"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 26,
                EnumName = "Category1099"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 27,
                EnumName = "KeyStore"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 28,
                EnumName = "UserCredentialStore"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 29,
                EnumName = "Bank"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 30,
                EnumName = "OfxSession"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 31,
                EnumName = "OnlineSessionCode"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 32,
                EnumName = "OnlineAccountServiceStatus"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 33,
                EnumName = "ResultObject"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 35,
                EnumName = "DriverRegistration"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 36,
                EnumName = "PaymentMethod"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 37,
                EnumName = "FiscalYear"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 38,
                EnumName = "BankingMethod"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 39,
                EnumName = "PayrollGenerationNumber"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 40,
                EnumName = "Country"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 41,
                EnumName = "MemorizedDocument"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 42,
                EnumName = "MemorizedDocumentReminder"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 43,
                EnumName = "IntrastatCommodityCode"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 44,
                EnumName = "IntrastatTransactionCode"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 45,
                EnumName = "ExtendedReminder"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 50,
                EnumName = "NameSuffix"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 51,
                EnumName = "NamePrefix"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 52,
                EnumName = "Channel"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 53,
                EnumName = "ECommerceProvider"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 60,
                EnumName = "Book"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 63,
                EnumName = "ChartOfAccount"
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 64,
                EnumName = "BudgetCode"
            });

            Action<ICreateTableWithColumnSyntax> addSupportTypeStringCols = expr => expr
                .WithColumn("EnumValue").AsInt32().Nullable()
                .WithColumn("DisplayName").AsString(256).Nullable()
                .WithColumn("languageId").AsInt32().Nullable()

                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            addSupportTypeStringCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupportTypeString")
                .WithColumn("EnumLocaleID").AsInt32().Identity().PrimaryKey().NotNullable());

            addSupportTypeStringCols(IfDatabase("oracle")
                .Create.Table("SupportTypeString")
                .WithColumn("EnumLocaleID").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "SupportTypeString", "EnumLocaleID");

            Insert.IntoTable("SupportTypeString").Row(new
            {
                EnumValue = 0,
                DisplayName = "InvalidSupportingTableType",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 1,
                DisplayName = "CustomerGroup",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 2,
                DisplayName = "VendorGroup",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 3,
                DisplayName = "CreditRating",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 4,
                DisplayName = "ItemGroup",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 5,
                DisplayName = "UnitOfMeasure",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 6,
                DisplayName = "ShippingTerm",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 7,
                DisplayName = "ShippingMethod",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 9,
                DisplayName = "PaymentTerm",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 10,
                DisplayName = "PriceLevel",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 11,
                DisplayName = "JobGroup",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 12,
                DisplayName = "Class",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 13,
                DisplayName = "Documents",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 15,
                DisplayName = "SalesTaxGroup",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 16,
                DisplayName = "PurchaseTaxGroup",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 17,
                DisplayName = "ItemTaxGroup",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 18,
                DisplayName = "TaxCode",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 19,
                DisplayName = "CreditCardType",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 20,
                DisplayName = "PayType",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 21,
                DisplayName = "Reminders",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 24,
                DisplayName = "CommonComments",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 25,
                DisplayName = "Currency",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 26,
                DisplayName = "Category1099",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 27,
                DisplayName = "KeyStore",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 28,
                DisplayName = "UserCredentialStore",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 29,
                DisplayName = "Bank",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 30,
                DisplayName = "OfxSession",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 31,
                DisplayName = "OnlineSessionCode",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 32,
                DisplayName = "OnlineAccountServiceStatus",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 33,
                DisplayName = "ResultObject",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 35,
                DisplayName = "DriverRegistration",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 36,
                DisplayName = "PaymentMethod",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 37,
                DisplayName = "FiscalYear",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 38,
                DisplayName = "BankingMethod",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 39,
                DisplayName = "PayrollGenerationNumber",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 40,
                DisplayName = "Country",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 41,
                DisplayName = "MemorizedDocument",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 42,
                DisplayName = "MemorizedDocumentReminder",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 43,
                DisplayName = "IntrastatCommodityCode",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 44,
                DisplayName = "IntrastatTransactionCode",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 45,
                DisplayName = "ExtendedReminder",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 50,
                DisplayName = "NameSuffix",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 51,
                DisplayName = "NamePrefix",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 52,
                DisplayName = "Channel",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 53,
                DisplayName = "ECommerceProvider",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 62,
                DisplayName = "Book",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 63,
                DisplayName = "ChartOfAccount",
                LanguageId = 1
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 64,
                DisplayName = "BudgetCode",
                LanguageId = 1
            });


            Insert.IntoTable("SupportTypeString").Row(new
            {
                EnumValue = 0,
                DisplayName = "Невалиден информационен тип",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 1,
                DisplayName = "Група купувачи",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 2,
                DisplayName = "Група доставчици",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 3,
                DisplayName = "Кредитен рейтинг",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 4,
                DisplayName = "Групи стоки",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 5,
                DisplayName = "Мерни единици",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 6,
                DisplayName = "Срокове за доставка",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 7,
                DisplayName = "Метод на доставка",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 9,
                DisplayName = "Срок за плащане",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 10,
                DisplayName = "Ценово ниво",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 11,
                DisplayName = "JobGroup",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 12,
                DisplayName = "Class",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 13,
                DisplayName = "Документи",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 15,
                DisplayName = "Данъчна група продажби",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 16,
                DisplayName = "Данъчна група покупки",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 17,
                DisplayName = "Данъчна група стоки",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 18,
                DisplayName = "Данъчен код",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 19,
                DisplayName = "CreditCardType",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 20,
                DisplayName = "Тип на плащане",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 21,
                DisplayName = "Reminders",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 24,
                DisplayName = "CommonComments",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 25,
                DisplayName = "Валута",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 26,
                DisplayName = "Category1099",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 27,
                DisplayName = "KeyStore",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 28,
                DisplayName = "UserCredentialStore",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 29,
                DisplayName = "Bank",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 30,
                DisplayName = "OfxSession",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 31,
                DisplayName = "OnlineSessionCode",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 32,
                DisplayName = "OnlineAccountServiceStatus",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 33,
                DisplayName = "ResultObject",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 35,
                DisplayName = "DriverRegistration",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 36,
                DisplayName = "Метод на плащане",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 37,
                DisplayName = "FiscalYear",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 38,
                DisplayName = "BankingMethod",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 39,
                DisplayName = "PayrollGenerationNumber",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 40,
                DisplayName = "Държави/Региони",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 41,
                DisplayName = "MemorizedDocument",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 42,
                DisplayName = "MemorizedDocumentReminder",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 43,
                DisplayName = "IntrastatCommodityCode",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 44,
                DisplayName = "IntrastatTransactionCode",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 45,
                DisplayName = "ExtendedReminder",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 50,
                DisplayName = "Наставка на името",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 51,
                DisplayName = "Титла",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 52,
                DisplayName = "Channel",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 53,
                DisplayName = "ECommerceProvider",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 62,
                DisplayName = "Папка",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 63,
                DisplayName = "Сметкоплан",
                LanguageId = 2
            });

            Insert.IntoTable("SupportType").Row(new
            {
                EnumValue = 64,
                DisplayName = "Бюджет тип",
                LanguageId = 1
            });




        }
    }
}
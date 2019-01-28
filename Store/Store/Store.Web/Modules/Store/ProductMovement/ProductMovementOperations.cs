
namespace Store.Store
{ 
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Store.ProductMovementOperations")]
    public enum ProductMovementOperations
    {
        [Description("Income products")]
        IncomeItems = 300,
        [Description("Products delivery")]
        StockDelivery = 302,
        [Description("Surplus products")]
        SurplusGoods = 303,
        [Description("Sale of products")]
        SaleOfArticles = 401,
        [Description("Lack of products")]
        LackOfItems = 402,
        [Description("Scrapping products")]
        ScrappingЬrticles = 403
    }
}
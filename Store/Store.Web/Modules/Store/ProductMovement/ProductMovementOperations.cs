
namespace Store.Store
{ 
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Store.ProductMovementOperations")]
    public enum ProductMovementOperations
    {
        [Description("Income products")]
        IncomeItems = 200,
        [Description("Products delivery")]
        StockDelivery = 202,
        [Description("Surplus products")]
        SurplusGoods = 203,
        [Description("Sale of products")]
        SaleOfArticles = 401,
        [Description("Lack of products")]
        LackOfItems = 402,
        [Description("Scrapping products")]
        Scrappingarticles = 403
    }
}
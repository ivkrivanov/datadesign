
namespace Store.Store
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Store.WaresMovementOperations")]
    public enum WaresMovementOperations
    {
        [Description("Income items")]
        IncomeItems = 100,
        [Description("Initial balance")]
        InitialBalance = 101,
        [Description("Stock delivery")]
        StockDelivery = 102,
        [Description("Surplus goods")]
        SurplusGoods = 103,
        [Description("Exchange Revenue")]
        ExchangeRevenue = 105,
        [Description("Unsubscription of goods")]
        UnsubscriptionOfGoods = 109,
        [Description("Sale of articles")]
        SaleOfArticles = 201,
        [Description("Lack of items")]
        LackOfItems = 202,
        [Description("Scrapping articles")]
        ScrappingЬrticles = 203,
        [Description("Exchange expense")]
        ExchangeExpense = 205,
        [Description("Inventory")]
        Inventory = 500
    }
}
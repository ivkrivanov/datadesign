namespace CoreStore.Store {
    export enum WaresMovementOperations {
        IncomeItems = 100,
        InitialBalance = 101,
        StockDelivery = 102,
        SurplusGoods = 103,
        ExchangeRevenue = 105,
        UnsubscriptionOfGoods = 109,
        SaleOfArticles = 301,
        LackOfItems = 302,
        Scrappingarticles = 303,
        ExchangeExpense = 305,
        Inventory = 500
    }
    Serenity.Decorators.registerEnumType(WaresMovementOperations, 'CoreStore.Store.WaresMovementOperations', 'Store.WaresMovementOperations');
}

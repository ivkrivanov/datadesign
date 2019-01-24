namespace Store.Store {
    export enum WaresMovementOperations {
        IncomeItems = 100,
        InitialBalance = 101,
        StockDelivery = 102,
        SurplusGoods = 103,
        ExchangeRevenue = 105,
        UnsubscriptionOfGoods = 109,
        SaleOfArticles = 201,
        LackOfItems = 202,
        ScrappingЬrticles = 203,
        ExchangeExpense = 205,
        Inventory = 500
    }
    Serenity.Decorators.registerEnumType(WaresMovementOperations, 'Store.Store.WaresMovementOperations', 'Store.WaresMovementOperations');
}


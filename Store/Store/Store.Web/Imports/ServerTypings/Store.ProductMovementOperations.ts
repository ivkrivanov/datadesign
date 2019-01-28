namespace Store.Store {
    export enum ProductMovementOperations {
        IncomeItems = 300,
        StockDelivery = 302,
        SurplusGoods = 303,
        SaleOfArticles = 401,
        LackOfItems = 402,
        ScrappingЬrticles = 403
    }
    Serenity.Decorators.registerEnumType(ProductMovementOperations, 'Store.Store.ProductMovementOperations', 'Store.ProductMovementOperations');
}


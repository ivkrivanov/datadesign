namespace Store.Store {
    export enum ProductMovementOperations {
        IncomeItems = 200,
        StockDelivery = 202,
        SurplusGoods = 203,
        SaleOfArticles = 401,
        LackOfItems = 402,
        ScrappingЬrticles = 403
    }
    Serenity.Decorators.registerEnumType(ProductMovementOperations, 'Store.Store.ProductMovementOperations', 'Store.ProductMovementOperations');
}


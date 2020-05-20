﻿namespace CoreStore.Store {
    export enum ProductMovementOperations {
        IncomeItems = 200,
        StockDelivery = 202,
        SurplusGoods = 203,
        SaleOfArticles = 401,
        LackOfItems = 402,
        Scrappingarticles = 403
    }
    Serenity.Decorators.registerEnumType(ProductMovementOperations, 'CoreStore.Store.ProductMovementOperations', 'Store.ProductMovementOperations');
}

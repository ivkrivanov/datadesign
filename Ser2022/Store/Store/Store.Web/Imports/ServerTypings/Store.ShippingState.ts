namespace Store.Store {
    export enum ShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(ShippingState, 'Store.Store.ShippingState', 'Store.ShippingState');
}

namespace CoreStore.Store {
    export enum ShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(ShippingState, 'CoreStore.Store.ShippingState', 'Store.ShippingState');
}

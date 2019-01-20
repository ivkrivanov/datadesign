namespace Store.Store {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Store.Store.OrderShippingState', 'Store.OrderShippingState');
}


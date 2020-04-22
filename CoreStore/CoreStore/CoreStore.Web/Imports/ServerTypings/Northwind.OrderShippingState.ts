namespace CoreStore.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'CoreStore.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

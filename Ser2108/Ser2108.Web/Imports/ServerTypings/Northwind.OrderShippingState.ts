namespace Ser2108.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Ser2108.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

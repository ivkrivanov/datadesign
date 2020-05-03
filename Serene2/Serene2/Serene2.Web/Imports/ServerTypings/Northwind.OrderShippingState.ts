namespace Serene2.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Serene2.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

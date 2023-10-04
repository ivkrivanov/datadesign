namespace AdvSerene.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'AdvSerene.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

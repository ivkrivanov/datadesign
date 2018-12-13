namespace Warehouse.Store {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Warehouse.Store.OrderShippingState', 'Store.OrderShippingState');
}


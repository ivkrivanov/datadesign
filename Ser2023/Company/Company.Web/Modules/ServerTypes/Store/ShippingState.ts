import { Decorators } from "@serenity-is/corelib";

export enum ShippingState {
    NotShipped = 0,
    Shipped = 1
}
Decorators.registerEnumType(ShippingState, 'Company.Store.ShippingState', 'Company.ShippingState');
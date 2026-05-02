import { fieldsProxy } from "@serenity-is/corelib/q";

export interface OrderTotalRow {
    OrderId?: number;
    Value?: number;
    VAT?: number;
    Total?: number;
}

export abstract class OrderTotalRow {
    static readonly idProperty = 'OrderId';
    static readonly localTextPrefix = 'Store.OrderTotal';
    static readonly deletePermission = 'Store:Product:Delete';
    static readonly insertPermission = 'Store:Product:Modify';
    static readonly readPermission = 'Store:Product:View';
    static readonly updatePermission = 'Store:Product:Modify';

    static readonly Fields = fieldsProxy<OrderTotalRow>();
}
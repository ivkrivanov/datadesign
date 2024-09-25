import { fieldsProxy } from "@serenity-is/corelib/q";

export interface WaresOrderTotalRow {
    WaresOrderId?: number;
    Value?: number;
    VAT?: number;
    Total?: number;
}

export abstract class WaresOrderTotalRow {
    static readonly idProperty = 'WaresOrderId';
    static readonly localTextPrefix = 'Store.WaresOrderTotal';
    static readonly deletePermission = 'Store:Wares:Delete';
    static readonly insertPermission = 'Store:Wares:Modify';
    static readonly readPermission = 'Store:Wares:View';
    static readonly updatePermission = 'Store:Wares:Modify';

    static readonly Fields = fieldsProxy<WaresOrderTotalRow>();
}
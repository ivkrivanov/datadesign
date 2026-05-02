import { fieldsProxy } from "@serenity-is/corelib/q";

export interface OrderDocRow {
    OrderId?: number;
    DocumentTypeId?: number;
    DocumentNumber?: string;
    DocumentDate?: string;
    DocumentTypeDocumentName?: string;
}

export abstract class OrderDocRow {
    static readonly idProperty = 'OrderId';
    static readonly nameProperty = 'DocumentNumber';
    static readonly localTextPrefix = 'Store.OrderDoc';
    static readonly deletePermission = 'Store:Order:Delete';
    static readonly insertPermission = 'Store:Order:Modify';
    static readonly readPermission = 'Store:Order:View';
    static readonly updatePermission = 'Store:Order:Modify';

    static readonly Fields = fieldsProxy<OrderDocRow>();
}
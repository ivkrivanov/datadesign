import { fieldsProxy } from "@serenity-is/corelib/q";

export interface WaresOrderDocRow {
    WaresOrderId?: number;
    DocumentTypeId?: number;
    DocumentNumber?: string;
    DocumentDate?: string;
    DocumentTypeDocumentName?: string;
}

export abstract class WaresOrderDocRow {
    static readonly idProperty = 'WaresOrderId';
    static readonly nameProperty = 'DocumentNumber';
    static readonly localTextPrefix = 'Store.WaresOrderDoc';
    static readonly deletePermission = 'Store:Wares:Delete';
    static readonly insertPermission = 'Store:Wares:Modify';
    static readonly readPermission = 'Store:Wares:View';
    static readonly updatePermission = 'Store:Wares:Modify';

    static readonly Fields = fieldsProxy<WaresOrderDocRow>();
}
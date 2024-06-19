import { fieldsProxy } from "@serenity-is/corelib/q";

export interface ProductLangRow {
    Id?: number;
    ProductId?: number;
    LanguageId?: number;
    ProductName?: string;
}

export abstract class ProductLangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'ProductName';
    static readonly localTextPrefix = 'Store.ProductLang';
    static readonly deletePermission = 'Store:General';
    static readonly insertPermission = 'Store:General';
    static readonly readPermission = 'Store:General';
    static readonly updatePermission = 'Store:General';

    static readonly Fields = fieldsProxy<ProductLangRow>();
}
import { CaptureOperationType } from "@serenity-is/corelib";
import { fieldsProxy } from "@serenity-is/corelib/q";

export interface ProductsLogRow {
    ProductLogId?: number;
    OperationType?: CaptureOperationType;
    ChangingUserId?: number;
    ValidFrom?: string;
    ValidUntil?: string;
    ProductId?: number;
    ProductName?: string;
    ProductImage?: string;
    Discontinued?: boolean;
    CategoryId?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    SalePrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
}

export abstract class ProductsLogRow {
    static readonly idProperty = 'ProductLogId';
    static readonly localTextPrefix = 'Store.ProductsLog';
    static readonly deletePermission = null;
    static readonly insertPermission = null;
    static readonly readPermission = '';
    static readonly updatePermission = null;

    static readonly Fields = fieldsProxy<ProductsLogRow>();
}
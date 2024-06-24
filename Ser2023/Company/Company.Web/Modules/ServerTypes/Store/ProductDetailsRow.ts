import { fieldsProxy } from "@serenity-is/corelib/q";

export interface ProductDetailsRow {
    DetailId?: number;
    ProductId?: number;
    WaresId?: number;
    PlanPrice?: number;
    Quantity?: number;
    ProductQuantity?: number;
    Discount?: number;
    IsActive?: number;
    TenantId?: number;
    ProductName?: string;
    ProductQuantityPerUnit?: string;
    ProductUnitPrice?: number;
    ProductUnitsInStock?: number;
    ProductUnitsOnOrder?: number;
    ProductReorderLevel?: number;
    ProductDiscontinued?: boolean;
    WaresCode?: string;
    WaresName?: string;
    LineTotal?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ProductDetailsRow {
    static readonly idProperty = 'DetailId';
    static readonly isActiveProperty = 'IsActive';
    static readonly localTextPrefix = 'Store.ProductDetails';
    static readonly deletePermission = 'Store:Product:Delete';
    static readonly insertPermission = 'Store:Product:View';
    static readonly readPermission = 'Store:Product:View';
    static readonly updatePermission = 'Store:Product:View';

    static readonly Fields = fieldsProxy<ProductDetailsRow>();
}
import { ProductDetailsRow } from "./ProductDetailsRow";
import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface ProductsRow {
    ProductId?: number;
    ProductCode?: string;
    ProductBarcode?: string;
    ProductLabel?: string;
    ProductName?: string;
    ProductImage?: string;
    CategoryId?: number;
    MeasureId?: number;
    MeasureName?: string;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    SalePrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    IsActive?: number;
    TenantId?: number;
    CategoryName?: string;
    Description?: string;
    DetailList?: ProductDetailsRow[];
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ProductsRow {
    static readonly idProperty = 'ProductId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'ProductName';
    static readonly localTextPrefix = 'Store.Products';
    static readonly lookupKey = 'Store.Product';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ProductsRow>('Store.Product') }
    static async getLookupAsync() { return getLookupAsync<ProductsRow>('Store.Product') }

    static readonly deletePermission = 'Store:Product:Delete';
    static readonly insertPermission = 'Store:Product:Modify';
    static readonly readPermission = 'Store:Product:View';
    static readonly updatePermission = 'Store:Product:Modify';

    static readonly Fields = fieldsProxy<ProductsRow>();
}
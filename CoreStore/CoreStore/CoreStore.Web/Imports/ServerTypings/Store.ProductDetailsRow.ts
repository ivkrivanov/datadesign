
namespace CoreStore.Store {
    export interface ProductDetailsRow {
        ProductId?: number;
        WaresId?: number;
        PlanPrice?: number;
        Quantity?: number;
        ProductQuantity?: number;
        Discount?: number;
        IsActive?: number;
        TenantId?: number;
        DetailId?: number;
        ProductProductCode?: string;
        ProductProductBarcode?: string;
        ProductProductLabel?: string;
        ProductProductName?: string;
        ProductProductImage?: string;
        ProductSupplierId?: number;
        ProductCounterpartyId?: string;
        ProductCategoryId?: number;
        ProductMeasureId?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        ProductIsActive?: number;
        ProductTenantId?: number;
        WaresWaresCode?: string;
        WaresWaresBarcode?: string;
        WaresWaresLabel?: string;
        WaresWaresName?: string;
        WaresWaresImage?: string;
        WaresSupplierId?: number;
        WaresCounterpartyId?: string;
        WaresCategoryId?: number;
        WaresMeasureId?: number;
        WaresQuantityPerUnit?: number;
        WaresUnitPrice?: number;
        WaresUnitsInStock?: number;
        WaresUnitsOnOrder?: number;
        WaresDiscontinued?: boolean;
        WaresAccountId?: number;
        WaresIsActive?: number;
        WaresTenantId?: number;
    }

    export namespace ProductDetailsRow {
        export const idProperty = 'DetailId';
        export const localTextPrefix = 'Store.ProductDetails';
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export namespace Fields {
            export declare const ProductId;
            export declare const WaresId;
            export declare const PlanPrice;
            export declare const Quantity;
            export declare const ProductQuantity;
            export declare const Discount;
            export declare const IsActive;
            export declare const TenantId;
            export declare const DetailId;
            export declare const ProductProductCode;
            export declare const ProductProductBarcode;
            export declare const ProductProductLabel;
            export declare const ProductProductName;
            export declare const ProductProductImage;
            export declare const ProductSupplierId;
            export declare const ProductCounterpartyId;
            export declare const ProductCategoryId;
            export declare const ProductMeasureId;
            export declare const ProductQuantityPerUnit;
            export declare const ProductUnitPrice;
            export declare const ProductUnitsInStock;
            export declare const ProductUnitsOnOrder;
            export declare const ProductReorderLevel;
            export declare const ProductDiscontinued;
            export declare const ProductIsActive;
            export declare const ProductTenantId;
            export declare const WaresWaresCode;
            export declare const WaresWaresBarcode;
            export declare const WaresWaresLabel;
            export declare const WaresWaresName;
            export declare const WaresWaresImage;
            export declare const WaresSupplierId;
            export declare const WaresCounterpartyId;
            export declare const WaresCategoryId;
            export declare const WaresMeasureId;
            export declare const WaresQuantityPerUnit;
            export declare const WaresUnitPrice;
            export declare const WaresUnitsInStock;
            export declare const WaresUnitsOnOrder;
            export declare const WaresDiscontinued;
            export declare const WaresAccountId;
            export declare const WaresIsActive;
            export declare const WaresTenantId;
        }

        [
            'ProductId',
            'WaresId',
            'PlanPrice',
            'Quantity',
            'ProductQuantity',
            'Discount',
            'IsActive',
            'TenantId',
            'DetailId',
            'ProductProductCode',
            'ProductProductBarcode',
            'ProductProductLabel',
            'ProductProductName',
            'ProductProductImage',
            'ProductSupplierId',
            'ProductCounterpartyId',
            'ProductCategoryId',
            'ProductMeasureId',
            'ProductQuantityPerUnit',
            'ProductUnitPrice',
            'ProductUnitsInStock',
            'ProductUnitsOnOrder',
            'ProductReorderLevel',
            'ProductDiscontinued',
            'ProductIsActive',
            'ProductTenantId',
            'WaresWaresCode',
            'WaresWaresBarcode',
            'WaresWaresLabel',
            'WaresWaresName',
            'WaresWaresImage',
            'WaresSupplierId',
            'WaresCounterpartyId',
            'WaresCategoryId',
            'WaresMeasureId',
            'WaresQuantityPerUnit',
            'WaresUnitPrice',
            'WaresUnitsInStock',
            'WaresUnitsOnOrder',
            'WaresDiscontinued',
            'WaresAccountId',
            'WaresIsActive',
            'WaresTenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

namespace CoreStore.Store {
    export interface ProductLogRow {
        ProductLogId?: number;
        OperationType?: number;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductId?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierId?: number;
        CategoryId?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }

    export namespace ProductLogRow {
        export const idProperty = 'ProductLogId';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Store.ProductLog';
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export namespace Fields {
            export declare const ProductLogId;
            export declare const OperationType;
            export declare const ChangingUserId;
            export declare const ValidFrom;
            export declare const ValidUntil;
            export declare const ProductId;
            export declare const ProductName;
            export declare const ProductImage;
            export declare const Discontinued;
            export declare const SupplierId;
            export declare const CategoryId;
            export declare const QuantityPerUnit;
            export declare const UnitPrice;
            export declare const UnitsInStock;
            export declare const UnitsOnOrder;
            export declare const ReorderLevel;
        }

        [
            'ProductLogId',
            'OperationType',
            'ChangingUserId',
            'ValidFrom',
            'ValidUntil',
            'ProductId',
            'ProductName',
            'ProductImage',
            'Discontinued',
            'SupplierId',
            'CategoryId',
            'QuantityPerUnit',
            'UnitPrice',
            'UnitsInStock',
            'UnitsOnOrder',
            'ReorderLevel'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
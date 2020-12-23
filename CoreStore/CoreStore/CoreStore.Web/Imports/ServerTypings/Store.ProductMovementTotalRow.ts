namespace CoreStore.Store {
    export interface ProductMovementTotalRow {
        ProductMoveId?: number;
        Value?: number;
        VAT?: number;
        Total?: number;
    }

    export namespace ProductMovementTotalRow {
        export const idProperty = 'ProductMoveId';
        export const localTextPrefix = 'Store.ProductMovementTotal';
        export const deletePermission = 'Store:Product:Delete';
        export const insertPermission = 'Store:Product:Modify';
        export const readPermission = 'Store:Product:View';
        export const updatePermission = 'Store:Product:Modify';

        export declare const enum Fields {
            ProductMoveId = "ProductMoveId",
            Value = "Value",
            VAT = "VAT",
            Total = "Total"
        }
    }
}

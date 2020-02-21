namespace Store.Store {
    export interface ProductMovementTotalRow {
        ProductMoveID?: number;
        Total?: number;
    }

    export namespace ProductMovementTotalRow {
        export const idProperty = 'ProductMoveID';
        export const localTextPrefix = 'Store.ProductMovementTotal';

        export declare const enum Fields {
            ProductMoveID = "ProductMoveID",
            Total = "Total"
        }
    }
}


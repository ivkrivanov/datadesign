namespace Store.Store {
    export interface ProductsLogRow {
        ProductLogId?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductId?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        CounterpartyId?: number;
        CategoryId?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }

    export namespace ProductsLogRow {
        export const idProperty = 'ProductLogId';
        export const localTextPrefix = 'Store.ProductsLog';
        export const deletePermission = null;
        export const insertPermission = null;
        export const readPermission = '';
        export const updatePermission = null;

        export declare const enum Fields {
            ProductLogId = "ProductLogId",
            OperationType = "OperationType",
            ChangingUserId = "ChangingUserId",
            ValidFrom = "ValidFrom",
            ValidUntil = "ValidUntil",
            ProductId = "ProductId",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            CounterpartyId = "CounterpartyId",
            CategoryId = "CategoryId",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel"
        }
    }
}

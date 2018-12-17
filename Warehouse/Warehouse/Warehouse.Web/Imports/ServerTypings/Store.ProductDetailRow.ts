namespace Warehouse.Store {
    export interface ProductDetailRow {
        DetailID?: number;
        ProductID?: number;
        Quantity?: number;
        ProductQuantity?: number;
        Reduction?: number;
        PlanPrice?: number;
        IsActive?: number;
        TenantId?: number;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductDetailRow {
        export const idProperty = 'DetailID';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Store.ProductDetail';

        export declare const enum Fields {
            DetailID = "DetailID",
            ProductID = "ProductID",
            Quantity = "Quantity",
            ProductQuantity = "ProductQuantity",
            Reduction = "Reduction",
            PlanPrice = "PlanPrice",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductName = "ProductName",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierID = "ProductSupplierID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


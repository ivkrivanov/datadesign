namespace Warehouse.Store {
    export interface ProductDetailRow {
        DetailID?: number;
        ProductID?: number;
        ItemID?: number;
        Quantity?: number;
        ProductQuantity?: number;
        Reduction?: number;
        PlanPrice?: number;
        IsActive?: number;
        TenantId?: number;
        ProductProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ItemItemCode?: string;
        ItemItemName?: string;
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
            ItemID = "ItemID",
            Quantity = "Quantity",
            ProductQuantity = "ProductQuantity",
            Reduction = "Reduction",
            PlanPrice = "PlanPrice",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductProductName = "ProductProductName",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierID = "ProductSupplierID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ItemItemCode = "ItemItemCode",
            ItemItemName = "ItemItemName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


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
        ProductProductImage?: string;
        ProductSupplierID?: number;
        ProductCategoryID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        ItemItemCode?: string;
        ItemItemBarcode?: string;
        ItemItemLabel?: string;
        ItemItemName?: string;
        ItemItemImage?: string;
        ItemSupplierID?: number;
        ItemItemCategoryID?: number;
        ItemMeasureID?: number;
        ItemQuantityPerUnit?: number;
        ItemUnitPrice?: number;
        ItemDiscontinued?: boolean;
        ItemAccountID?: number;
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
            ProductProductImage = "ProductProductImage",
            ProductSupplierID = "ProductSupplierID",
            ProductCategoryID = "ProductCategoryID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductDiscontinued = "ProductDiscontinued",
            ItemItemCode = "ItemItemCode",
            ItemItemBarcode = "ItemItemBarcode",
            ItemItemLabel = "ItemItemLabel",
            ItemItemName = "ItemItemName",
            ItemItemImage = "ItemItemImage",
            ItemSupplierID = "ItemSupplierID",
            ItemItemCategoryID = "ItemItemCategoryID",
            ItemMeasureID = "ItemMeasureID",
            ItemQuantityPerUnit = "ItemQuantityPerUnit",
            ItemUnitPrice = "ItemUnitPrice",
            ItemDiscontinued = "ItemDiscontinued",
            ItemAccountID = "ItemAccountID",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


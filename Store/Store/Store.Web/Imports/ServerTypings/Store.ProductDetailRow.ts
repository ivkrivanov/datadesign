namespace Store.Store {
    export interface ProductDetailRow {
        DetailID?: number;
        ProductID?: number;
        WaresID?: number;
        PlanPrice?: number;
        Quantity?: number;
        ProductQuantity?: number;
        Discount?: number;
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
        WaresCode?: string;
        WaresBarcode?: string;
        WaresLabel?: string;
        WaresName?: string;
        WaresImage?: string;
        WaresCategoryID?: number;
        WaresMeasureID?: number;
        WaresQuantityPerUnit?: number;
        WaresUnitPrice?: number;
        WaresDiscontinued?: boolean;
        WaresAccountID?: number;
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
            WaresID = "WaresID",
            PlanPrice = "PlanPrice",
            Quantity = "Quantity",
            ProductQuantity = "ProductQuantity",
            Discount = "Discount",
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
            WaresCode = "WaresCode",
            WaresBarcode = "WaresBarcode",
            WaresLabel = "WaresLabel",
            WaresName = "WaresName",
            WaresImage = "WaresImage",
            WaresCategoryID = "WaresCategoryID",
            WaresMeasureID = "WaresMeasureID",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
            WaresDiscontinued = "WaresDiscontinued",
            WaresAccountID = "WaresAccountID",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


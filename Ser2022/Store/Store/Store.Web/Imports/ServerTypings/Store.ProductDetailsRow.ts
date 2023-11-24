namespace Store.Store {
    export interface ProductDetailsRow {
        DetailId?: number;
        ProductId?: number;
        WaresId?: number;
        PlanPrice?: number;
        Quantity?: number;
        ProductQuantity?: number;
        Discount?: number;
        IsActive?: number;
        TenantId?: number;
        ProductName?: string;
        ProductCategoryId?: number;
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
        WaresCategoryId?: number;
        WaresMeasureId?: number;
        WaresQuantityPerUnit?: number;
        WaresUnitPrice?: number;
        WaresDiscontinued?: boolean;
        WaresAccountId?: number;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductDetailsRow {
        export const idProperty = 'DetailId';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Store.ProductDetails';
        export const deletePermission = 'Store:Product:Delete';
        export const insertPermission = 'Store:Product:View';
        export const readPermission = 'Store:Product:View';
        export const updatePermission = 'Store:Product:View';

        export declare const enum Fields {
            DetailId = "DetailId",
            ProductId = "ProductId",
            WaresId = "WaresId",
            PlanPrice = "PlanPrice",
            Quantity = "Quantity",
            ProductQuantity = "ProductQuantity",
            Discount = "Discount",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductName = "ProductName",
            ProductCategoryId = "ProductCategoryId",
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
            WaresCategoryId = "WaresCategoryId",
            WaresMeasureId = "WaresMeasureId",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
            WaresDiscontinued = "WaresDiscontinued",
            WaresAccountId = "WaresAccountId",
            LineTotal = "LineTotal",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

namespace Store.Store {
    export interface OrderProductDetailRow {
        DetailId?: number;
        OrderProductsId?: number;
        ProductId?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        TenantId?: number;
        ProductProductName?: string;
        ProductProductImage?: string;
        ProductSupplierId?: number;
        ProductCategoryId?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        ProductInsertDate?: string;
        ProductInsertUserId?: number;
        ProductUpdateDate?: string;
        ProductUpdateUserId?: number;
        ProductIsActive?: number;
        ProductTenantId?: number;
    }

    export namespace OrderProductDetailRow {
        export const idProperty = 'DetailId';
        export const localTextPrefix = 'Store.OrderProductDetail';

        export declare const enum Fields {
            DetailId = "DetailId",
            OrderProductsId = "OrderProductsId",
            ProductId = "ProductId",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductProductName = "ProductProductName",
            ProductProductImage = "ProductProductImage",
            ProductSupplierId = "ProductSupplierId",
            ProductCategoryId = "ProductCategoryId",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductDiscontinued = "ProductDiscontinued",
            ProductInsertDate = "ProductInsertDate",
            ProductInsertUserId = "ProductInsertUserId",
            ProductUpdateDate = "ProductUpdateDate",
            ProductUpdateUserId = "ProductUpdateUserId",
            ProductIsActive = "ProductIsActive",
            ProductTenantId = "ProductTenantId"
        }
    }
}


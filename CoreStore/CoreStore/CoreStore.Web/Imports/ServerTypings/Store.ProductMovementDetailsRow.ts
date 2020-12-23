namespace CoreStore.Store {
    export interface ProductMovementDetailsRow {
        ProductMoveId?: number;
        ProductId?: number;
        Quantity?: number;
        SinglePrice?: number;
        Discount?: number;
        DetailId?: number;
        IsActive?: number;
        TenantId?: number;
        ProductMoveShopId?: string;
        ProductMoveCounterpartyId?: string;
        ProductMoveEmployeeId?: number;
        ProductMoveShipperId?: number;
        ProductMoveOperationTypeId?: number;
        ProductMoveOrderDate?: string;
        ProductMoveRequiredDate?: string;
        ProductMoveShippedDate?: string;
        ProductCode?: string;
        ProductName?: string;
        ProductCounterpartyId?: number;
        ProductCategoryId?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        LineValue?: number;
        LineVAT?: number;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductMovementDetailsRow {
        export const idProperty = 'DetailId';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Store.ProductMovementDetails';
        export const deletePermission = 'Store:Product:Delete';
        export const insertPermission = 'Store:Product:Modify';
        export const readPermission = 'Store:Product:View';
        export const updatePermission = 'Store:Product:Modify';

        export declare const enum Fields {
            ProductMoveId = "ProductMoveId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            SinglePrice = "SinglePrice",
            Discount = "Discount",
            DetailId = "DetailId",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductMoveShopId = "ProductMoveShopId",
            ProductMoveCounterpartyId = "ProductMoveCounterpartyId",
            ProductMoveEmployeeId = "ProductMoveEmployeeId",
            ProductMoveShipperId = "ProductMoveShipperId",
            ProductMoveOperationTypeId = "ProductMoveOperationTypeId",
            ProductMoveOrderDate = "ProductMoveOrderDate",
            ProductMoveRequiredDate = "ProductMoveRequiredDate",
            ProductMoveShippedDate = "ProductMoveShippedDate",
            ProductCode = "ProductCode",
            ProductName = "ProductName",
            ProductCounterpartyId = "ProductCounterpartyId",
            ProductCategoryId = "ProductCategoryId",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductDiscontinued = "ProductDiscontinued",
            LineValue = "LineValue",
            LineVAT = "LineVAT",
            LineTotal = "LineTotal",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

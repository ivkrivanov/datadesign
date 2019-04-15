namespace Store.Store {
    export interface ProductMovementDetailsRow {
        ProductMoveID?: number;
        ProductID?: number;
        Quantity?: number;
        SalePrice?: number;
        Discount?: number;
        DetailID?: number;
        IsActive?: number;
        TenantId?: number;
        ProductMoveShopID?: string;
        ProductMoveCounterpartyID?: string;
        ProductMoveEmployeeID?: number;
        ProductMoveShipperID?: number;
        ProductMoveOperationTypeID?: number;
        ProductMoveOperationTypeOpCode?: number;
        ProductMoveOrderDate?: string;
        ProductMoveRequiredDate?: string;
        ProductMoveShippedDate?: string;
        ProductCode?: string;
        ProductName?: string;
        ProductSupplierID?: number;
        ProductCategoryID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductMovementDetailsRow {
        export const idProperty = 'DetailID';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Store.ProductMovementDetails';

        export declare const enum Fields {
            ProductMoveID = "ProductMoveID",
            ProductID = "ProductID",
            Quantity = "Quantity",
            SalePrice = "SalePrice",
            Discount = "Discount",
            DetailID = "DetailID",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductMoveShopID = "ProductMoveShopID",
            ProductMoveCounterpartyID = "ProductMoveCounterpartyID",
            ProductMoveEmployeeID = "ProductMoveEmployeeID",
            ProductMoveShipperID = "ProductMoveShipperID",
            ProductMoveOperationTypeID = "ProductMoveOperationTypeID",
            ProductMoveOperationTypeOpCode = "ProductMoveOperationTypeOpCode",
            ProductMoveOrderDate = "ProductMoveOrderDate",
            ProductMoveRequiredDate = "ProductMoveRequiredDate",
            ProductMoveShippedDate = "ProductMoveShippedDate",
            ProductCode = "ProductCode",
            ProductName = "ProductName",
            ProductSupplierID = "ProductSupplierID",
            ProductCategoryID = "ProductCategoryID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductDiscontinued = "ProductDiscontinued",
            LineTotal = "LineTotal",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


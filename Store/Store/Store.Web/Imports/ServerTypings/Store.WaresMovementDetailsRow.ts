namespace Store.Store {
    export interface WaresMovementDetailsRow {
        WaresMoveID?: number;
        WaresID?: number;
        Quantity?: number;
        IncomePrice?: number;
        SalePrice?: number;
        SinglePrice?: number;
        Discount?: number;
        DetailID?: number;
        IsActive?: number;
        TenantId?: number;
        WaresMoveShopID?: string;
        WaresMoveCounterpartyID?: string;
        WaresMoveEmployeeID?: number;
        WaresMoveShipperID?: number;
        WaresMoveOperationTypeID?: number;
        WaresMoveOrderDate?: string;
        WaresMoveRequiredDate?: string;
        WaresMoveShippedDate?: string;
        WaresWaresCode?: string;
        WaresWaresName?: string;
        WaresSupplierID?: number;
        WaresCounterpartyID?: string;
        WaresCategoryID?: number;
        WaresMeasureID?: number;
        WaresQuantityPerUnit?: string;
        WaresUnitPrice?: number;
        WaresDiscontinued?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WaresMovementDetailsRow {
        export const idProperty = 'WaresMoveID';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Store.WaresMovementDetails';

        export declare const enum Fields {
            WaresMoveID = "WaresMoveID",
            WaresID = "WaresID",
            Quantity = "Quantity",
            IncomePrice = "IncomePrice",
            SalePrice = "SalePrice",
            SinglePrice = "SinglePrice",
            Discount = "Discount",
            DetailID = "DetailID",
            IsActive = "IsActive",
            TenantId = "TenantId",
            WaresMoveShopID = "WaresMoveShopID",
            WaresMoveCounterpartyID = "WaresMoveCounterpartyID",
            WaresMoveEmployeeID = "WaresMoveEmployeeID",
            WaresMoveShipperID = "WaresMoveShipperID",
            WaresMoveOperationTypeID = "WaresMoveOperationTypeID",
            WaresMoveOrderDate = "WaresMoveOrderDate",
            WaresMoveRequiredDate = "WaresMoveRequiredDate",
            WaresMoveShippedDate = "WaresMoveShippedDate",
            WaresWaresCode = "WaresWaresCode",
            WaresWaresName = "WaresWaresName",
            WaresSupplierID = "WaresSupplierID",
            WaresCounterpartyID = "WaresCounterpartyID",
            WaresCategoryID = "WaresCategoryID",
            WaresMeasureID = "WaresMeasureID",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
            WaresDiscontinued = "WaresDiscontinued",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


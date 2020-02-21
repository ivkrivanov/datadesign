namespace Store.Store {
    export interface WaresMovementDetailsRow {
        WaresMoveID?: number;
        WaresID?: number;
        Quantity?: number;
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
        WaresMoveOperationTypeOpCode?: number;
        WaresMoveOrderDate?: string;
        WaresMoveRequiredDate?: string;
        WaresMoveShippedDate?: string;
        WaresCode?: string;
        WaresName?: string;
        WaresCounterpartyID?: string;
        WaresCategoryID?: number;
        WaresMeasureID?: number;
        WaresMeasureName?: string;
        WaresQuantityPerUnit?: string;
        WaresUnitPrice?: number;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WaresMovementDetailsRow {
        export const idProperty = 'DetailID';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Store.WaresMovementDetails';

        export declare const enum Fields {
            WaresMoveID = "WaresMoveID",
            WaresID = "WaresID",
            Quantity = "Quantity",
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
            WaresMoveOperationTypeOpCode = "WaresMoveOperationTypeOpCode",
            WaresMoveOrderDate = "WaresMoveOrderDate",
            WaresMoveRequiredDate = "WaresMoveRequiredDate",
            WaresMoveShippedDate = "WaresMoveShippedDate",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            WaresCounterpartyID = "WaresCounterpartyID",
            WaresCategoryID = "WaresCategoryID",
            WaresMeasureID = "WaresMeasureID",
            WaresMeasureName = "WaresMeasureName",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
            LineTotal = "LineTotal",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


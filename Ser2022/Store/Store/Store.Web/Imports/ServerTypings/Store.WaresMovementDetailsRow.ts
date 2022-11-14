namespace Store.Store {
    export interface WaresMovementDetailsRow {
        DetailId?: number;
        WaresMoveId?: number;
        WaresId?: number;
        Quantity?: number;
        SinglePrice?: number;
        Discount?: number;
        IsActive?: number;
        TenantId?: number;
        WaresMoveShopId?: string;
        WaresMoveCounterpartyId?: string;
        WaresMoveEmployeeId?: number;
        WaresMoveOperationTypeId?: number;
        WaresMoveOrderDate?: string;
        WaresMoveRequiredDate?: string;
        WaresMoveShippedDate?: string;
        WaresCode?: string;
        WaresName?: string;
        WaresCounterpartyId?: string;
        WaresCategoryId?: number;
        WaresMeasureId?: number;
        WaresMeasureName?: string;
        WaresQuantityPerUnit?: string;
        WaresUnitPrice?: number;
        LineValue?: number;
        LineVAT?: number;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WaresMovementDetailsRow {
        export const idProperty = 'DetailId';
        export const isActiveProperty = 'IsActive';
        export const localTextPrefix = 'Store.WaresMovementDetails';
        export const deletePermission = 'Store:Wares:Delete';
        export const insertPermission = 'Store:Wares:Modify';
        export const readPermission = 'Store:Wares:View';
        export const updatePermission = 'Store:Wares:Modify';

        export declare const enum Fields {
            DetailId = "DetailId",
            WaresMoveId = "WaresMoveId",
            WaresId = "WaresId",
            Quantity = "Quantity",
            SinglePrice = "SinglePrice",
            Discount = "Discount",
            IsActive = "IsActive",
            TenantId = "TenantId",
            WaresMoveShopId = "WaresMoveShopId",
            WaresMoveCounterpartyId = "WaresMoveCounterpartyId",
            WaresMoveEmployeeId = "WaresMoveEmployeeId",
            WaresMoveOperationTypeId = "WaresMoveOperationTypeId",
            WaresMoveOrderDate = "WaresMoveOrderDate",
            WaresMoveRequiredDate = "WaresMoveRequiredDate",
            WaresMoveShippedDate = "WaresMoveShippedDate",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            WaresCounterpartyId = "WaresCounterpartyId",
            WaresCategoryId = "WaresCategoryId",
            WaresMeasureId = "WaresMeasureId",
            WaresMeasureName = "WaresMeasureName",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
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

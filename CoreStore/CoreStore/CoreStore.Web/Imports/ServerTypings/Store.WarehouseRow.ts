namespace CoreStore.Store {
    export interface WarehouseRow {
        Position?: number;
        WaresMode?: boolean;
        MoveId?: number;
        ShopId?: number;
        WaresId?: number;
        Key?: string;
        Date?: string;
        OperationId?: number;
        IncomeQuantity?: number;
        IncomeSinglePrice?: number;
        IncomeValue?: number;
        AIncomeSinglePrice?: number;
        AIncomeValue?: number;
        ExpenceQuantity?: number;
        ExpenceSinglePrice?: number;
        ExpenceValue?: number;
        AExpenceSinglePrice?: number;
        AExpenceValue?: number;
        RestQuantity?: number;
        RestSinglePrice?: number;
        RestValue?: number;
        ARestQuantity?: number;
        ARestSinglePrice?: number;
        ARestValue?: number;
        ReCost?: number;
        AReCost?: number;
        Mistake?: boolean;
        AMistake?: boolean;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WarehouseRow {
        export const idProperty = 'Position';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Key';
        export const localTextPrefix = 'Store.Warehouse';
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export declare const enum Fields {
            Position = "Position",
            WaresMode = "WaresMode",
            MoveId = "MoveId",
            ShopId = "ShopId",
            WaresId = "WaresId",
            Key = "Key",
            Date = "Date",
            OperationId = "OperationId",
            IncomeQuantity = "IncomeQuantity",
            IncomeSinglePrice = "IncomeSinglePrice",
            IncomeValue = "IncomeValue",
            AIncomeSinglePrice = "AIncomeSinglePrice",
            AIncomeValue = "AIncomeValue",
            ExpenceQuantity = "ExpenceQuantity",
            ExpenceSinglePrice = "ExpenceSinglePrice",
            ExpenceValue = "ExpenceValue",
            AExpenceSinglePrice = "AExpenceSinglePrice",
            AExpenceValue = "AExpenceValue",
            RestQuantity = "RestQuantity",
            RestSinglePrice = "RestSinglePrice",
            RestValue = "RestValue",
            ARestQuantity = "ARestQuantity",
            ARestSinglePrice = "ARestSinglePrice",
            ARestValue = "ARestValue",
            ReCost = "ReCost",
            AReCost = "AReCost",
            Mistake = "Mistake",
            AMistake = "AMistake",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

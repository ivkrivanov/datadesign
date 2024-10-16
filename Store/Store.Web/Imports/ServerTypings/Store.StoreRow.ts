﻿namespace Store.Store {
    export interface StoreRow {
        Position?: number;
        WaresMode?: boolean;
        MoveID?: number;
        ShopID?: number;
        WaresID?: number;
        Key?: string;
        Date?: string;
        OperationID?: number;
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

    export namespace StoreRow {
        export const idProperty = 'Position';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Key';
        export const localTextPrefix = 'Store.Store';

        export declare const enum Fields {
            Position = "Position",
            WaresMode = "WaresMode",
            MoveID = "MoveID",
            ShopID = "ShopID",
            WaresID = "WaresID",
            Key = "Key",
            Date = "Date",
            OperationID = "OperationID",
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


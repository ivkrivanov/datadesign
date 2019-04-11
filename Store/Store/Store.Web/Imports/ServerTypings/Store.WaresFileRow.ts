﻿namespace Store.Store {
    export interface WaresFileRow {
        ShopID?: number;
        WaresID?: number;
        WaresCode?: string;
        WaresName?: string;
        Date?: string;
        IncomeQuantity?: number;
        IncomeSinglePrice?: number;
        IncomeValue?: number;
        ExpenceQuantity?: number;
        ExpenceSinglePrice?: number;
        ExpenceValue?: number;
        RestQuantity?: number;
        RestSinglePrice?: number;
        RestValue?: number;
        ReCost?: number;
        Mistake?: boolean;
        ShopName?: string;
    }

    export namespace WaresFileRow {
        export const nameProperty = 'WaresCode';
        export const localTextPrefix = 'Store.WaresFile';

        export declare const enum Fields {
            ShopID = "ShopID",
            WaresID = "WaresID",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            Date = "Date",
            IncomeQuantity = "IncomeQuantity",
            IncomeSinglePrice = "IncomeSinglePrice",
            IncomeValue = "IncomeValue",
            ExpenceQuantity = "ExpenceQuantity",
            ExpenceSinglePrice = "ExpenceSinglePrice",
            ExpenceValue = "ExpenceValue",
            RestQuantity = "RestQuantity",
            RestSinglePrice = "RestSinglePrice",
            RestValue = "RestValue",
            ReCost = "ReCost",
            Mistake = "Mistake",
            ShopName = "ShopName"
        }
    }
}


namespace Store.Store {
    export interface StoreMoveRow {
        ShopID?: number;
        WaresID?: number;
        Key?: string;
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
    }

    export namespace StoreMoveRow {
        export const nameProperty = 'Key';
        export const localTextPrefix = 'Store.StoreMove';

        export declare const enum Fields {
            ShopID = "ShopID",
            WaresID = "WaresID",
            Key = "Key",
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
            Mistake = "Mistake"
        }
    }
}


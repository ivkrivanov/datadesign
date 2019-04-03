namespace Store.Store {
    export interface StoreMoveRow {
        ShopID?: number;
        WaresID?: number;
        WaresCode?: string;
        WaresName?: string;
        Date?: string;
        InitialQuantity?: number;
        InitialSinglePrice?: number;
        InitialValue?: number;
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
        export const nameProperty = 'WaresCode';
        export const localTextPrefix = 'Store.StoreMove';

        export declare const enum Fields {
            ShopID = "ShopID",
            WaresID = "WaresID",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            Date = "Date",
            InitialQuantity = "InitialQuantity",
            InitialSinglePrice = "InitialSinglePrice",
            InitialValue = "InitialValue",
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


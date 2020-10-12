namespace CoreStore.Store {
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
        ShopName?: string;
    }

    export namespace StoreMoveRow {
        export const nameProperty = 'WaresCode';
        export const localTextPrefix = 'Store.StoreMove';
        export const deletePermission = 'Store:Wares:Modify';
        export const insertPermission = 'Store:Wares:Modify';
        export const readPermission = 'Store:Wares:View';
        export const updatePermission = 'Store:Wares:Modify';

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
            Mistake = "Mistake",
            ShopName = "ShopName"
        }
    }
}

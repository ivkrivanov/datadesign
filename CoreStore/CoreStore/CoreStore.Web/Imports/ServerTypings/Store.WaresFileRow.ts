namespace CoreStore.Store {
    export interface WaresFileRow {
        ShopID?: number;
        WaresID?: number;
        WaresCode?: string;
        WaresName?: string;
        Date?: string;
        DocumentType?: string;
        DocumentNumber?: string;
        DocumentDate?: string;
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
        export const lookupKey = 'Store.WaresFile';

        export function getLookup(): Q.Lookup<WaresFileRow> {
            return Q.getLookup<WaresFileRow>('Store.WaresFile');
        }
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
            DocumentType = "DocumentType",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
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

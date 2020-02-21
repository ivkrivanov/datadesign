namespace Store.Store {
    export interface ProductCostsRow {
        WaresID?: number;
        WaresCode?: string;
        WaresName?: string;
        Quantity?: number;
        SinglePrice?: number;
        Value?: number;
        MeasureID?: number;
        MeasureName?: string;
    }

    export namespace ProductCostsRow {
        export const idProperty = 'WaresID';
        export const nameProperty = 'WaresName';
        export const localTextPrefix = 'Store.ProductCosts';

        export declare const enum Fields {
            WaresID = "WaresID",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            Quantity = "Quantity",
            SinglePrice = "SinglePrice",
            Value = "Value",
            MeasureID = "MeasureID",
            MeasureName = "MeasureName"
        }
    }
}


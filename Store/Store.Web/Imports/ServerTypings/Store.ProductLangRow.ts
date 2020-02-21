namespace Store.Store {
    export interface ProductLangRow {
        ID?: number;
        ProductID?: number;
        LanguageID?: number;
        ProductName?: string;
    }

    export namespace ProductLangRow {
        export const idProperty = 'ID';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Store.ProductLang';

        export declare const enum Fields {
            ID = "ID",
            ProductID = "ProductID",
            LanguageID = "LanguageID",
            ProductName = "ProductName"
        }
    }
}


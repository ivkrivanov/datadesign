namespace Store.Store {
    export interface WaresLangRow {
        ID?: number;
        WaresID?: number;
        LanguageID?: number;
        WaresName?: string;
        Description?: string;
    }

    export namespace WaresLangRow {
        export const idProperty = 'ID';
        export const nameProperty = 'WaresName';
        export const localTextPrefix = 'Store.WaresLang';

        export declare const enum Fields {
            ID = "ID",
            WaresID = "WaresID",
            LanguageID = "LanguageID",
            WaresName = "WaresName",
            Description = "Description"
        }
    }
}


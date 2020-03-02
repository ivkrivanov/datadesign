namespace Store.Store {
    export interface WaresCategoriesLangRow {
        ID?: number;
        WaresCategoryID?: number;
        LanguageID?: number;
        WaresCategoryName?: string;
        Description?: string;
    }

    export namespace WaresCategoriesLangRow {
        export const idProperty = 'ID';
        export const nameProperty = 'WaresCategoryName';
        export const localTextPrefix = 'Store.WaresCategoriesLang';

        export declare const enum Fields {
            ID = "ID",
            WaresCategoryID = "WaresCategoryID",
            LanguageID = "LanguageID",
            WaresCategoryName = "WaresCategoryName",
            Description = "Description"
        }
    }
}


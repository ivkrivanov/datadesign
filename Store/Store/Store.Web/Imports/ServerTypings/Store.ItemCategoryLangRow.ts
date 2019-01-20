namespace Store.Store {
    export interface ItemCategoryLangRow {
        ID?: number;
        LanguageID?: number;
        ItemCategoryName?: string;
        Description?: string;
    }

    export namespace ItemCategoryLangRow {
        export const idProperty = 'ID';
        export const nameProperty = 'ItemCategoryName';
        export const localTextPrefix = 'Store.ItemCategoryLang';

        export declare const enum Fields {
            ID = "ID",
            LanguageID = "LanguageID",
            ItemCategoryName = "ItemCategoryName",
            Description = "Description"
        }
    }
}


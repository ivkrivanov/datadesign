namespace Store.Store {
    export interface CategoryLangRow {
        ID?: number;
        LanguageID?: number;
        CategoryName?: string;
        Description?: string;
    }

    export namespace CategoryLangRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Store.CategoryLang';

        export declare const enum Fields {
            ID = "ID",
            LanguageID = "LanguageID",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}


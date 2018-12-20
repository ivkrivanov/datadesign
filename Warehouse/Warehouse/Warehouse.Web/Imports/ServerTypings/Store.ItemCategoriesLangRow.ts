namespace Warehouse.Store {
    export interface ItemCategoriesLangRow {
        Id?: number;
        ItemCategoryId?: number;
        LanguageId?: number;
        ItemCategoryName?: string;
        Description?: string;
    }

    export namespace ItemCategoriesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ItemCategoryName';
        export const localTextPrefix = 'Store.ItemCategoriesLang';

        export declare const enum Fields {
            Id = "Id",
            ItemCategoryId = "ItemCategoryId",
            LanguageId = "LanguageId",
            ItemCategoryName = "ItemCategoryName",
            Description = "Description"
        }
    }
}


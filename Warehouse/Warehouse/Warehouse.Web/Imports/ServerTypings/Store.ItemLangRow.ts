namespace Warehouse.Store {
    export interface ItemLangRow {
        Id?: number;
        ItemId?: number;
        LanguageId?: number;
        ItemName?: string;
        Description?: string;
    }

    export namespace ItemLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Store.ItemLang';

        export declare const enum Fields {
            Id = "Id",
            ItemId = "ItemId",
            LanguageId = "LanguageId",
            ItemName = "ItemName",
            Description = "Description"
        }
    }
}


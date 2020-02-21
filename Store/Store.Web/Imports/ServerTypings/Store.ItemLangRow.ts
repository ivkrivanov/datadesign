namespace Store.Store {
    export interface ItemLangRow {
        ID?: number;
        ItemID?: number;
        LanguageID?: number;
        ItemName?: string;
        Description?: string;
    }

    export namespace ItemLangRow {
        export const idProperty = 'ID';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Store.ItemLang';

        export declare const enum Fields {
            ID = "ID",
            ItemID = "ItemID",
            LanguageID = "LanguageID",
            ItemName = "ItemName",
            Description = "Description"
        }
    }
}


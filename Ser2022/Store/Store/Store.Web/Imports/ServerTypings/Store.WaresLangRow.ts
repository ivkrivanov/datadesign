namespace Store.Store {
    export interface WaresLangRow {
        Id?: number;
        WaresId?: number;
        LanguageId?: number;
        WaresName?: string;
        Description?: string;
    }

    export namespace WaresLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'WaresName';
        export const localTextPrefix = 'Store.WaresLang';
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export declare const enum Fields {
            Id = "Id",
            WaresId = "WaresId",
            LanguageId = "LanguageId",
            WaresName = "WaresName",
            Description = "Description"
        }
    }
}

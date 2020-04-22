
namespace CoreStore.Store {
    export interface CategoriesLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }

    export namespace CategoriesLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Store.CategoriesLang';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const CategoryId;
            export declare const LanguageId;
            export declare const CategoryName;
            export declare const Description;
        }

        [
            'Id',
            'CategoryId',
            'LanguageId',
            'CategoryName',
            'Description'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
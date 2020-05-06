
namespace CoreStore.Store {
    export interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }

    export namespace ProductLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Store.ProductLang';
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export namespace Fields {
            export declare const Id;
            export declare const ProductId;
            export declare const LanguageId;
            export declare const ProductName;
        }

        [
            'Id',
            'ProductId',
            'LanguageId',
            'ProductName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
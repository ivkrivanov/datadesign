import { fieldsProxy } from "@serenity-is/corelib/q";

export interface CategoriesLangRow {
    Id?: number;
    CategoryId?: number;
    LanguageId?: number;
    CategoryName?: string;
    Description?: string;
}

export abstract class CategoriesLangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'CategoryName';
    static readonly localTextPrefix = 'Store.CategoriesLang';
    static readonly deletePermission = 'Store:General';
    static readonly insertPermission = 'Store:General';
    static readonly readPermission = 'Store:General';
    static readonly updatePermission = 'Store:General';

    static readonly Fields = fieldsProxy<CategoriesLangRow>();
}
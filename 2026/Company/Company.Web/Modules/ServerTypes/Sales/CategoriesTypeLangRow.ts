import { fieldsProxy } from "@serenity-is/corelib";

export interface CategoriesTypeLangRow {
    Id?: number;
    CategoryTypeId?: number;
    LanguageId?: string;
    CategoryTypeName?: string;
    Description?: string;
}

export abstract class CategoriesTypeLangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'CategoryTypeName';
    static readonly localTextPrefix = 'Sales.CategoriesTypeLang';
    static readonly deletePermission = 'Company:Categories:Modify';
    static readonly insertPermission = 'Company:Categories:Modify';
    static readonly readPermission = 'Company:Categories:View';
    static readonly updatePermission = 'Company:Categories:Modify';

    static readonly Fields = fieldsProxy<CategoriesTypeLangRow>();
}
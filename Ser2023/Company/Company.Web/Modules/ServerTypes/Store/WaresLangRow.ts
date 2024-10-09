import { fieldsProxy } from "@serenity-is/corelib/q";

export interface WaresLangRow {
    Id?: number;
    WaresId?: number;
    LanguageId?: number;
    WaresName?: string;
    Description?: string;
}

export abstract class WaresLangRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'WaresName';
    static readonly localTextPrefix = 'Store.WaresLang';
    static readonly deletePermission = 'Store:General';
    static readonly insertPermission = 'Store:General';
    static readonly readPermission = 'Store:General';
    static readonly updatePermission = 'Store:General';

    static readonly Fields = fieldsProxy<WaresLangRow>();
}
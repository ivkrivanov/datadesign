import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface CategoriesTypeRow {
    CategoryTypeId?: number;
    Type?: number;
    CategoryType?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CategoriesTypeRow {
    static readonly idProperty = 'CategoryTypeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CategoryType';
    static readonly localTextPrefix = 'Store.CategoriesType';
    static readonly lookupKey = 'Store.CategoriesType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CategoriesTypeRow>('Store.CategoriesType') }
    static async getLookupAsync() { return getLookupAsync<CategoriesTypeRow>('Store.CategoriesType') }

    static readonly deletePermission = 'Store:CategoriesType:Delete';
    static readonly insertPermission = 'Store:CategoriesType:Modify';
    static readonly readPermission = 'Store:CategoriesType:View';
    static readonly updatePermission = 'Store:CategoriesType:Modify';

    static readonly Fields = fieldsProxy<CategoriesTypeRow>();
}
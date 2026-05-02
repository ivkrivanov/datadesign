import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface CategoriesRow {
    CategoryId?: number;
    CategoryTypeId?: number;
    CategoryCode?: string;
    CategoryName?: string;
    Description?: string;
    Picture?: number[];
    IsActive?: number;
    TenantId?: number;
    Type?: number;
    CategoryType?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CategoriesRow {
    static readonly idProperty = 'CategoryId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CategoryName';
    static readonly localTextPrefix = 'Store.Categories';
    static readonly lookupKey = 'Store.Categories';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CategoriesRow>('Store.Categories') }
    static async getLookupAsync() { return getLookupAsync<CategoriesRow>('Store.Categories') }

    static readonly deletePermission = 'Store:CategoriesType:Delete';
    static readonly insertPermission = 'Store:CategoriesType:Modify';
    static readonly readPermission = 'Store:CategoriesType:View';
    static readonly updatePermission = 'Store:CategoriesType:Modify';

    static readonly Fields = fieldsProxy<CategoriesRow>();
}

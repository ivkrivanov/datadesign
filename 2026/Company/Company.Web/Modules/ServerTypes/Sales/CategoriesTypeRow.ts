import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

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
    static readonly localTextPrefix = 'Sales.CategoriesType';
    static readonly lookupKey = 'Sales.CategoriesType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CategoriesTypeRow>('Sales.CategoriesType') }
    static async getLookupAsync() { return getLookupAsync<CategoriesTypeRow>('Sales.CategoriesType') }

    static readonly deletePermission = 'Company:Categories:Modify';
    static readonly insertPermission = 'Company:Categories:Modify';
    static readonly readPermission = 'Company:Categories:View';
    static readonly updatePermission = 'Company:Categories:Modify';

    static readonly Fields = fieldsProxy<CategoriesTypeRow>();
}
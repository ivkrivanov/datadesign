import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface CurrencyRow {
    CurrencyId?: number;
    CurrencyCode?: string;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CurrencyRow {
    static readonly idProperty = 'CurrencyId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CurrencyCode';
    static readonly localTextPrefix = 'Company.Currency';
    static readonly lookupKey = 'Sales.Currency';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CurrencyRow>('Sales.Currency') }
    static async getLookupAsync() { return getLookupAsync<CurrencyRow>('Sales.Currency') }

    static readonly deletePermission = 'Company:Currency:Delete';
    static readonly insertPermission = 'Company:Currency:Modify';
    static readonly readPermission = 'Company:Currency:View';
    static readonly updatePermission = 'Company:Currency:Modify';

    static readonly Fields = fieldsProxy<CurrencyRow>();
}
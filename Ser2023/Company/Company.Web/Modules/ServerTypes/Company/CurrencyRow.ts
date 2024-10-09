import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface CurrencyRow {
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
    static readonly idProperty = 'CurrencyCode';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Company.Currency';
    static readonly lookupKey = 'Company.Currency';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CurrencyRow>('Company.Currency') }
    static async getLookupAsync() { return getLookupAsync<CurrencyRow>('Company.Currency') }

    static readonly deletePermission = 'Company:Currency:Delete';
    static readonly insertPermission = 'Company:Currency:Modify';
    static readonly readPermission = 'Company:Currency:View';
    static readonly updatePermission = 'Company:Currency:Modify';

    static readonly Fields = fieldsProxy<CurrencyRow>();
}
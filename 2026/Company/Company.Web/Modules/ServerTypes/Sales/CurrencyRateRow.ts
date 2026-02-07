import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface CurrencyRateRow {
    CurrencyRateId?: number;
    CurrencyRateDate?: string;
    FromCurrencyCode?: string;
    ToCurrencyCode?: string;
    AverageRate?: number;
    EndOfDayRate?: number;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CurrencyRateRow {
    static readonly idProperty = 'CurrencyRateId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'FromCurrencyCode';
    static readonly localTextPrefix = 'Sales.CurrencyRate';
    static readonly lookupKey = 'Sales.CurrencyRate';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CurrencyRateRow>('Sales.CurrencyRate') }
    static async getLookupAsync() { return getLookupAsync<CurrencyRateRow>('Sales.CurrencyRate') }

    static readonly deletePermission = 'Company:CurrencyRate:Delete';
    static readonly insertPermission = 'Company:CurrencyRate:Modify';
    static readonly readPermission = 'Company:CurrencyRate:View';
    static readonly updatePermission = 'Company:CurrencyRate:Modify';

    static readonly Fields = fieldsProxy<CurrencyRateRow>();
}
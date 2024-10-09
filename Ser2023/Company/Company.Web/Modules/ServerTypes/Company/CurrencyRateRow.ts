import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface CurrencyRateRow {
    CurrencyRateId?: number;
    CurrencyRateDate?: string;
    FromCurrencyCode?: string;
    ToCurrencyCode?: string;
    AverageRate?: number;
    EndOfDayRate?: number;
    IsActive?: number;
    TenantId?: number;
    FromCurrencyCodeName?: string;
    ToCurrencyCodeName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CurrencyRateRow {
    static readonly idProperty = 'CurrencyRateId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'FromCurrencyCode';
    static readonly localTextPrefix = 'CurrencyRate.CurrencyRate';
    static readonly lookupKey = 'Company.CurrencyRate';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CurrencyRateRow>('Company.CurrencyRate') }
    static async getLookupAsync() { return getLookupAsync<CurrencyRateRow>('Company.CurrencyRate') }

    static readonly deletePermission = 'Company:CurrencyRate:Delete';
    static readonly insertPermission = 'Company:CurrencyRate:Modify';
    static readonly readPermission = 'Company:CurrencyRate:View';
    static readonly updatePermission = 'Company:CurrencyRate:Modify';

    static readonly Fields = fieldsProxy<CurrencyRateRow>();
}
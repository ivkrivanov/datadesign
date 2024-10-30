import { fieldsProxy } from '@serenity-is/corelib';

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
}

export abstract class CurrencyRateRow {
    static readonly idProperty = 'CurrencyRateId';
    static readonly nameProperty = 'FromCurrencyCode';
    static readonly localTextPrefix = 'Company.CurrencyRate';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<CurrencyRateRow>();
}
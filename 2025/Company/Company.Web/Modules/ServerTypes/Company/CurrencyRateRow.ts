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
}

export abstract class CurrencyRateRow {
    static readonly idProperty = 'CurrencyRateId';
    static readonly nameProperty = 'FromCurrencyCode';
    static readonly localTextPrefix = 'Company.CurrencyRate';

    static readonly deletePermission = 'PermissionKeys.CurrencyRate';
    static readonly insertPermission = 'PermissionKeys.CurrencyRate';
    static readonly readPermission = 'PermissionKeys.CurrencyRate';
    static readonly updatePermission = 'PermissionKeys.CurrencyRate';

    static readonly Fields = fieldsProxy<CurrencyRateRow>();
}
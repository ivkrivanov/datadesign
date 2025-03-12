import { fieldsProxy } from '@serenity-is/corelib';

export interface CurrencyRow {
    CurrencyId?: number;
    CurrencyCode?: string;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class CurrencyRow {
    static readonly idProperty = 'CurrencyId';
    static readonly nameProperty = 'CurrencyCode';
    static readonly localTextPrefix = 'Company.Currency';

    static readonly deletePermission = 'PermissionKeys.Currency';
    static readonly insertPermission = 'PermissionKeys.Currency';
    static readonly readPermission = 'PermissionKeys.Currency';
    static readonly updatePermission = 'PermissionKeys.Currency';

    static readonly Fields = fieldsProxy<CurrencyRow>();
}
import { fieldsProxy } from '@serenity-is/corelib';

export interface CurrencyRow {
    CurrencyCode?: string;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class CurrencyRow {
    static readonly idProperty = 'CurrencyCode';
    static readonly nameProperty = 'CurrencyCode';
    static readonly localTextPrefix = 'Company.Currency';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<CurrencyRow>();
}
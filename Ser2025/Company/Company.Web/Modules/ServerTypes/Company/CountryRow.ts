import { fieldsProxy } from '@serenity-is/corelib';

export interface CountryRow {
    CountryCode?: string;
    CountryName?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class CountryRow {
    static readonly idProperty = 'CountryCode';
    static readonly nameProperty = 'CountryCode';
    static readonly localTextPrefix = 'Company.Country';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<CountryRow>();
}
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

    static readonly deletePermission = 'PermissionKeys.Country';
    static readonly insertPermission = 'PermissionKeys.Country';
    static readonly readPermission = 'PermissionKeys.Country';
    static readonly updatePermission = 'PermissionKeys.Country';

    static readonly Fields = fieldsProxy<CountryRow>();
}
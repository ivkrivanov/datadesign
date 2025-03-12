import { fieldsProxy } from '@serenity-is/corelib';

export interface StateProvinceRow {
    StateProvinceId?: number;
    StateProvinceCode?: string;
    CountryCode?: string;
    StateProvinceName?: string;
    IsActive?: number;
    TenantId?: number;
    CountryCodeCountryName?: string;
}

export abstract class StateProvinceRow {
    static readonly idProperty = 'StateProvinceId';
    static readonly nameProperty = 'StateProvinceCode';
    static readonly localTextPrefix = 'Company.StateProvince';

    static readonly deletePermission = 'PermissionKeys.StateProvince';
    static readonly insertPermission = 'PermissionKeys.StateProvince';
    static readonly readPermission = 'PermissionKeys.StateProvince';
    static readonly updatePermission = 'PermissionKeys.StateProvince';

    static readonly Fields = fieldsProxy<StateProvinceRow>();
}
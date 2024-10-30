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

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<StateProvinceRow>();
}
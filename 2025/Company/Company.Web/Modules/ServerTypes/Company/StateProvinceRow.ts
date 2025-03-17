import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface StateProvinceRow {
    StateProvinceId?: number;
    StateProvinceCode?: string;
    CountryCode?: string;
    StateProvinceName?: string;
    IsActive?: number;
    TenantId?: number;
    CountryCodeCountryName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class StateProvinceRow {
    static readonly idProperty = 'StateProvinceId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'StateProvinceCode';
    static readonly localTextPrefix = 'Company.StateProvince';
    static readonly lookupKey = 'Company.StateProvivce';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<StateProvinceRow>('Company.StateProvivce') }
    static async getLookupAsync() { return getLookupAsync<StateProvinceRow>('Company.StateProvivce') }

    static readonly deletePermission = 'Company:StateProvince:Delete';
    static readonly insertPermission = 'Company:StateProvince:Modify';
    static readonly readPermission = 'Company:StateProvince:View';
    static readonly updatePermission = 'Company:StateProvince:Modify';

    static readonly Fields = fieldsProxy<StateProvinceRow>();
}
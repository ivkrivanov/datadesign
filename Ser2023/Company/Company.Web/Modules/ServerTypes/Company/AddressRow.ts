import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface AddressRow {
    AddressId?: number;
    AddressLine1?: string;
    AddressLine2?: string;
    City?: string;
    CountryCode?: string;
    CountryName?: string;
    StateProvinceId?: number;
    StateProvinceCode?: string;
    StateProvinceName?: string;
    PostalCode?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class AddressRow {
    static readonly idProperty = 'AddressId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'AddressLine1';
    static readonly localTextPrefix = 'Company.Address';
    static readonly lookupKey = 'Company.Address';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<AddressRow>('Company.Address') }
    static async getLookupAsync() { return getLookupAsync<AddressRow>('Company.Address') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<AddressRow>();
}
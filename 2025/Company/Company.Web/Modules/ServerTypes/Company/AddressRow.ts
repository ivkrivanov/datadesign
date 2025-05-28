import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface AddressRow {
    AddressId?: number;
    AddressLine1?: string;
    AddressLine2?: string;
    City?: string;
    CountryId?: string;
    ProvinceId?: number;
    PostalCode?: string;
    CountryName?: string;
    ProvinceName?: string;
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

    static readonly deletePermission = 'Company:Address:Delete';
    static readonly insertPermission = 'Company:Address:Modify';
    static readonly readPermission = 'Company:Address:View';
    static readonly updatePermission = 'Company:Address:Modify';

    static readonly Fields = fieldsProxy<AddressRow>();
}
import { fieldsProxy } from '@serenity-is/corelib';

export interface AddressRow {
    AddressId?: number;
    AddressLine1?: string;
    AddressLine2?: string;
    City?: string;
    CountryCode?: string;
    StateProvinceId?: number;
    PostalCode?: string;
    IsActive?: number;
    TenantId?: number;
    CountryCodeCountryName?: string;
    StateProvinceCode?: string;
}

export abstract class AddressRow {
    static readonly idProperty = 'AddressId';
    static readonly nameProperty = 'AddressLine1';
    static readonly localTextPrefix = 'Company.Address';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<AddressRow>();
}
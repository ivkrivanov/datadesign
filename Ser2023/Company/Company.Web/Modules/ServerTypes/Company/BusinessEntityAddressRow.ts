import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface BusinessEntityAddressRow {
    BusinessEntityId?: number;
    AddressId?: number;
    AddressTypeId?: number;
    AddressTypeName?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class BusinessEntityAddressRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly isActiveProperty = 'IsActive';
    static readonly localTextPrefix = 'Company.BusinessEntityAddress';
    static readonly lookupKey = 'Company.BusinessEntityAddress';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<BusinessEntityAddressRow>('Company.BusinessEntityAddress') }
    static async getLookupAsync() { return getLookupAsync<BusinessEntityAddressRow>('Company.BusinessEntityAddress') }

    static readonly deletePermission = 'Company:BusinessEntityAddress:Delete';
    static readonly insertPermission = 'Company:BusinessEntityAddress:Modify';
    static readonly readPermission = 'Company:BusinessEntityAddress:View';
    static readonly updatePermission = 'Company:BusinessEntityAddress:Modify';

    static readonly Fields = fieldsProxy<BusinessEntityAddressRow>();
}
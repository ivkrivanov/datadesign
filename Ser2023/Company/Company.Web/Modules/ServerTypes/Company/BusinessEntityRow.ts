import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface BusinessEntityRow {
    BusinessEntityId?: number;
    IsActive?: number;
    TenantId?: number;
    PersonType?: string;
    Title?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    FullName?: string;
    Suffix?: string;
    AddressId?: number;
    AddressTypeId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class BusinessEntityRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly isActiveProperty = 'IsActive';
    static readonly localTextPrefix = 'Company.BusinessEntity';
    static readonly lookupKey = 'Company.BusinessEntity';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<BusinessEntityRow>('Company.BusinessEntity') }
    static async getLookupAsync() { return getLookupAsync<BusinessEntityRow>('Company.BusinessEntity') }

    static readonly deletePermission = 'Company:BusinessEntity:Delete';
    static readonly insertPermission = 'Company:BusinessEntity:Modify';
    static readonly readPermission = 'Company:BusinessEntity:View';
    static readonly updatePermission = 'Company:BusinessEntity:Modify';

    static readonly Fields = fieldsProxy<BusinessEntityRow>();
}
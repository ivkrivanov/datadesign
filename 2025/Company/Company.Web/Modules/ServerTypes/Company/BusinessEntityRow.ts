import { fieldsProxy, getLookup, getLookupAsync } from '@serenity-is/corelib';

export interface BusinessEntityRow {
    BusinessEntityId?: number;
    PersonType?: string;
    Title?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    FullName?: string;
    Suffix?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class BusinessEntityRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly localTextPrefix = 'Company.BusinessEntity';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<BusinessEntityRow>('Company.BusinessEntity') }
    static async getLookupAsync() { return getLookupAsync<BusinessEntityRow>('Company.BusinessEntity') }

    static readonly deletePermission = 'Company:BusinessEntity:Delete';
    static readonly insertPermission = 'Company:BusinessEntity:Modify';
    static readonly readPermission = 'Company:BusinessEntity:View';
    static readonly updatePermission = 'Company:BusinessEntity:Modify';

    static readonly Fields = fieldsProxy<BusinessEntityRow>();
}
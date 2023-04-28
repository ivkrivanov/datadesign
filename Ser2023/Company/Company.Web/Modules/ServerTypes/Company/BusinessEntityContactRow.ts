import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface BusinessEntityContactRow {
    BusinessEntityId?: number;
    PersonId?: number;
    ContactTypeId?: number;
    Rowguid?: string;
    IsActive?: number;
    TenantId?: number;
    ContactTypeName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class BusinessEntityContactRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'ContactTypeId';
    static readonly localTextPrefix = 'Company.BusinessEntityContact';
    static readonly lookupKey = 'Company.BusinessEntityContact';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<BusinessEntityContactRow>('Company.BusinessEntityContact') }
    static async getLookupAsync() { return getLookupAsync<BusinessEntityContactRow>('Company.BusinessEntityContact') }

    static readonly deletePermission = 'Company:BusinessEntityContact:Delete';
    static readonly insertPermission = 'Company:BusinessEntityContact:Modify';
    static readonly readPermission = 'Company:BusinessEntityContact:View';
    static readonly updatePermission = 'Company:BusinessEntityContact:Modify';

    static readonly Fields = fieldsProxy<BusinessEntityContactRow>();
}
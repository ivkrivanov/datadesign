import { fieldsProxy } from '@serenity-is/corelib';

export interface BusinessEntityAddressRow {
    BusinessEntityId?: number;
    AddressId?: number;
    AddressTypeId?: number;
    IsActive?: number;
    TenantId?: number;
    AddressLine1?: string;
    AddressTypeName?: string;
}

export abstract class BusinessEntityAddressRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly localTextPrefix = 'Company.BusinessEntityAddress';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<BusinessEntityAddressRow>();
}
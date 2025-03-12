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

    static readonly deletePermission = 'PermissionKeys.BusinessEntityAddress';
    static readonly insertPermission = 'PermissionKeys.BusinessEntityAddress';
    static readonly readPermission = 'PermissionKeys.BusinessEntityAddress';
    static readonly updatePermission = 'PermissionKeys.BusinessEntityAddress';

    static readonly Fields = fieldsProxy<BusinessEntityAddressRow>();
}
import { fieldsProxy } from '@serenity-is/corelib';

export interface BusinessEntityContactRow {
    BusinessEntityId?: number;
    PersonId?: number;
    ContactTypeId?: number;
    IsActive?: number;
    TenantId?: number;
    PersonType?: string;
    ContactTypeName?: string;
}

export abstract class BusinessEntityContactRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly localTextPrefix = 'Company.BusinessEntityContact';

    static readonly deletePermission = 'PermissionKeys.BusinessEntityContact';
    static readonly insertPermission = 'PermissionKeys.BusinessEntityContact';
    static readonly readPermission = 'PermissionKeys.BusinessEntityContact';
    static readonly updatePermission = 'PermissionKeys.BusinessEntityContact';

    static readonly Fields = fieldsProxy<BusinessEntityContactRow>();
}
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

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<BusinessEntityContactRow>();
}
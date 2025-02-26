import { fieldsProxy } from '@serenity-is/corelib';

export interface BusinessEntityRow {
    BusinessEntityId?: number;
    IsActive?: number;
    TenantId?: number;
}

export abstract class BusinessEntityRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly localTextPrefix = 'Company.BusinessEntity';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<BusinessEntityRow>();
}
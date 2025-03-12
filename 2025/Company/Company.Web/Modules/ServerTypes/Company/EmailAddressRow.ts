import { fieldsProxy } from '@serenity-is/corelib';

export interface EmailAddressRow {
    BusinessEntityId?: number;
    EmailAddressId?: number;
    EmailAddress?: string;
    IsActive?: number;
    TenantId?: number;
    BusinessEntityPersonType?: string;
}

export abstract class EmailAddressRow {
    static readonly idProperty = 'EmailAddressId';
    static readonly nameProperty = 'EmailAddress';
    static readonly localTextPrefix = 'Company.EmailAddress';

    static readonly deletePermission = 'PermissionKeys.EmailAddress';
    static readonly insertPermission = 'PermissionKeys.EmailAddress';
    static readonly readPermission = 'PermissionKeys.EmailAddress';
    static readonly updatePermission = 'PermissionKeys.EmailAddress';

    static readonly Fields = fieldsProxy<EmailAddressRow>();
}
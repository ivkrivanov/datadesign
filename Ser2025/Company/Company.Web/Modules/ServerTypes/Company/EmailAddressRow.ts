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

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<EmailAddressRow>();
}
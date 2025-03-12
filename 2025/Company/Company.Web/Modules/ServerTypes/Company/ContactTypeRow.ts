import { fieldsProxy } from '@serenity-is/corelib';

export interface ContactTypeRow {
    ContactTypeId?: number;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class ContactTypeRow {
    static readonly idProperty = 'ContactTypeId';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Company.ContactType';

    static readonly deletePermission = 'PermissionKeys.ContactType';
    static readonly insertPermission = 'PermissionKeys.ContactType';
    static readonly readPermission = 'PermissionKeys.ContactType';
    static readonly updatePermission = 'PermissionKeys.ContactType';

    static readonly Fields = fieldsProxy<ContactTypeRow>();
}
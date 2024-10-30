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

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ContactTypeRow>();
}
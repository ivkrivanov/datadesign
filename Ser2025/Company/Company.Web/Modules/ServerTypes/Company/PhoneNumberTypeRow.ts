import { fieldsProxy } from '@serenity-is/corelib';

export interface PhoneNumberTypeRow {
    PhoneNumberTypeId?: number;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class PhoneNumberTypeRow {
    static readonly idProperty = 'PhoneNumberTypeId';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Company.PhoneNumberType';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PhoneNumberTypeRow>();
}
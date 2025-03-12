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

    static readonly deletePermission = 'PermissionKeys.PhoneNumberType';
    static readonly insertPermission = 'PermissionKeys.PhoneNumberType';
    static readonly readPermission = 'PermissionKeys.PhoneNumberType';
    static readonly updatePermission = 'PermissionKeys.PhoneNumberType';

    static readonly Fields = fieldsProxy<PhoneNumberTypeRow>();
}
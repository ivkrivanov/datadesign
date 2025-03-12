import { fieldsProxy } from '@serenity-is/corelib';

export interface PersonPhoneRow {
    BusinessEntityId?: number;
    PhoneNumber?: string;
    PhoneNumberTypeId?: number;
    IsActive?: number;
    TenantId?: number;
    BusinessEntityPersonType?: string;
    PhoneNumberTypeName?: string;
}

export abstract class PersonPhoneRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly nameProperty = 'PhoneNumber';
    static readonly localTextPrefix = 'Company.PersonPhone';

    static readonly deletePermission = 'PermissionKeys.PersonPhone';
    static readonly insertPermission = 'PermissionKeys.PersonPhone';
    static readonly readPermission = 'PermissionKeys.PersonPhone';
    static readonly updatePermission = 'PermissionKeys.PersonPhone';

    static readonly Fields = fieldsProxy<PersonPhoneRow>();
}
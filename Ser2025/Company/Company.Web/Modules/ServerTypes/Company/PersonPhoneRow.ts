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

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonPhoneRow>();
}
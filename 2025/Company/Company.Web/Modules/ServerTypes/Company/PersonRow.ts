import { fieldsProxy } from '@serenity-is/corelib';

export interface PersonRow {
    BusinessEntityId?: number;
    PersonType?: string;
    Title?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    Suffix?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class PersonRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly nameProperty = 'PersonType';
    static readonly localTextPrefix = 'Company.Person';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonRow>();
}
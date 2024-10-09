import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface PersonRow {
    BusinessEntityId?: number;
    Title?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    FullName?: string;
    Suffix?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class PersonRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'FullName';
<<<<<<< HEAD
    static readonly localTextPrefix = 'Company.Person';
=======
    static readonly localTextPrefix = 'Person.Person';
>>>>>>> revert
    static readonly lookupKey = 'Company.Person';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<PersonRow>('Company.Person') }
    static async getLookupAsync() { return getLookupAsync<PersonRow>('Company.Person') }

    static readonly deletePermission = 'Company:Person:Delete';
    static readonly insertPermission = 'Company:Person:Modify';
    static readonly readPermission = 'Company:Person:View';
    static readonly updatePermission = 'Company:Person:Modify';

    static readonly Fields = fieldsProxy<PersonRow>();
}
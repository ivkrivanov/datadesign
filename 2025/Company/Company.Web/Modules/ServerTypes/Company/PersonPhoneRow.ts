import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface PersonPhoneRow {
    BusinessEntityId?: number;
    PhoneNumber?: string;
    PhoneNumberTypeId?: number;
    IsActive?: number;
    TenantId?: number;
    BusinessEntityPersonType?: string;
    PhoneNumberTypeName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class PersonPhoneRow {
    static readonly idProperty = 'BusinessEntityId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'PhoneNumber';
    static readonly localTextPrefix = 'Company.PersonPhone';
    static readonly lookupKey = 'Company.PersonPhone';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<PersonPhoneRow>('Company.PersonPhone') }
    static async getLookupAsync() { return getLookupAsync<PersonPhoneRow>('Company.PersonPhone') }

    static readonly deletePermission = 'Company:PersonPhone:Modify';
    static readonly insertPermission = 'Company:PersonPhone:Modify';
    static readonly readPermission = 'Company:PersonPhone:View';
    static readonly updatePermission = 'Company:PersonPhone:Modify';

    static readonly Fields = fieldsProxy<PersonPhoneRow>();
}
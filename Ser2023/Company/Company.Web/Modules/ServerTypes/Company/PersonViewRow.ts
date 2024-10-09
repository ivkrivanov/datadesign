import { fieldsProxy } from "@serenity-is/corelib/q";

export interface PersonViewRow {
    PersonType?: string;
    Title?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    Suffix?: string;
    Name?: string;
    PhoneNumberType?: string;
    AddressType?: string;
    AddressLine1?: string;
    AddressLine2?: string;
    City?: string;
    PostalCode?: string;
    StateProvinceCode?: string;
    Country?: string;
}

export abstract class PersonViewRow {
    static readonly idProperty = 'PersonType';
    static readonly nameProperty = 'PersonType';
    static readonly localTextPrefix = 'Company.PersonView';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<PersonViewRow>();
}
import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface ContactTypeRow {
    ContactTypeId?: number;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ContactTypeRow {
    static readonly idProperty = 'ContactTypeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Company.ContactType';
    static readonly lookupKey = 'Company.ContactType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ContactTypeRow>('Company.ContactType') }
    static async getLookupAsync() { return getLookupAsync<ContactTypeRow>('Company.ContactType') }

    static readonly deletePermission = 'Company:ContactType:Delete';
    static readonly insertPermission = 'Company:ContactType:Modify';
    static readonly readPermission = 'Company:ContactType:View';
    static readonly updatePermission = 'Company:ContactType:Modify';

    static readonly Fields = fieldsProxy<ContactTypeRow>();
}
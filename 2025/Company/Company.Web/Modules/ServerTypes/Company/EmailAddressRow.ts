import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface EmailAddressRow {
    BusinessEntityId?: number;
    EmailAddressId?: number;
    EmailAddress?: string;
    IsActive?: number;
    TenantId?: number;
    BusinessEntityPersonType?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class EmailAddressRow {
    static readonly idProperty = 'EmailAddressId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'EmailAddress';
    static readonly localTextPrefix = 'Company.EmailAddress';
    static readonly lookupKey = 'Company.EmailAddress';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<EmailAddressRow>('Company.EmailAddress') }
    static async getLookupAsync() { return getLookupAsync<EmailAddressRow>('Company.EmailAddress') }

    static readonly deletePermission = 'Company:EmailAddress:Delete';
    static readonly insertPermission = 'Company:EmailAddress:Modify';
    static readonly readPermission = 'Company:EmailAddress:View';
    static readonly updatePermission = 'Company:EmailAddress:Modify';

    static readonly Fields = fieldsProxy<EmailAddressRow>();
}
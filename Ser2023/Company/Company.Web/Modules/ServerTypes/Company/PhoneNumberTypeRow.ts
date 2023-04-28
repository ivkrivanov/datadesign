import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface PhoneNumberTypeRow {
    PhoneNumberTypeId?: number;
    Name?: string;
    Rowguid?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class PhoneNumberTypeRow {
    static readonly idProperty = 'PhoneNumberTypeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Company.PhoneNumberType';
    static readonly lookupKey = 'Company.PhoneNumberType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<PhoneNumberTypeRow>('Company.PhoneNumberType') }
    static async getLookupAsync() { return getLookupAsync<PhoneNumberTypeRow>('Company.PhoneNumberType') }

    static readonly deletePermission = 'Company:PhoneNumberType:Delete';
    static readonly insertPermission = 'Company:PhoneNumberType:Modify';
    static readonly readPermission = 'Company:PhoneNumberType:View';
    static readonly updatePermission = 'Company:PhoneNumberType:Modify';

    static readonly Fields = fieldsProxy<PhoneNumberTypeRow>();
}
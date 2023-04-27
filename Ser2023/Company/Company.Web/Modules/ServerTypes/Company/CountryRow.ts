import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface CountryRow {
    CountryCode?: string;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CountryRow {
    static readonly idProperty = 'CountryCode';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CountryCode';
    static readonly localTextPrefix = 'Company.Country';
    static readonly lookupKey = 'Company.Country';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CountryRow>('Company.Country') }
    static async getLookupAsync() { return getLookupAsync<CountryRow>('Company.Country') }

    static readonly deletePermission = 'Company:Country:Delete';
    static readonly insertPermission = 'Company:Country:Modify';
    static readonly readPermission = 'Company:Country:View';
    static readonly updatePermission = 'Company:Country:Modify';

    static readonly Fields = fieldsProxy<CountryRow>();
}
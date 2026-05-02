import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface ProvinceRow {
    ProvinceId?: number;
    ProvinceCode?: string;
    CountryId?: number;
    ProvinceName?: string;
    CountryCode?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ProvinceRow {
    static readonly idProperty = 'ProvinceId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'ProvinceCode';
    static readonly localTextPrefix = 'Company.Province';
    static readonly lookupKey = 'Company.Province';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ProvinceRow>('Company.Province') }
    static async getLookupAsync() { return getLookupAsync<ProvinceRow>('Company.Province') }

    static readonly deletePermission = 'Company:Province:Delete';
    static readonly insertPermission = 'Company:Province:Modify';
    static readonly readPermission = 'Company:Province:View';
    static readonly updatePermission = 'Company:Province:Modify';

    static readonly Fields = fieldsProxy<ProvinceRow>();
}
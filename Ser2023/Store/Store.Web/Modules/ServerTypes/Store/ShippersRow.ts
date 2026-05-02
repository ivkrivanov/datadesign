import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface ShippersRow {
    ShipperId?: number;
    CompanyName?: string;
    Phone?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ShippersRow {
    static readonly idProperty = 'ShipperId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CompanyName';
    static readonly localTextPrefix = 'Store.Shippers';
    static readonly lookupKey = 'Store.Shipper';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ShippersRow>('Store.Shipper') }
    static async getLookupAsync() { return getLookupAsync<ShippersRow>('Store.Shipper') }

    static readonly deletePermission = 'Store:General';
    static readonly insertPermission = 'Store:General';
    static readonly readPermission = 'Store:General';
    static readonly updatePermission = 'Store:General';

    static readonly Fields = fieldsProxy<ShippersRow>();
}

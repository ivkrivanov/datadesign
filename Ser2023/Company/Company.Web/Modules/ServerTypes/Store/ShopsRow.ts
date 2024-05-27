import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface ShopsRow {
    Id?: number;
    ShopId?: string;
    ShopName?: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Phone?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class ShopsRow {
    static readonly idProperty = 'Id';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'ShopId';
    static readonly localTextPrefix = 'Store.Shops';
    static readonly lookupKey = 'Store.Shops';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<ShopsRow>('Store.Shops') }
    static async getLookupAsync() { return getLookupAsync<ShopsRow>('Store.Shops') }

    static readonly deletePermission = 'Store:Shops:Delete';
    static readonly insertPermission = 'Store:Shops:Modify';
    static readonly readPermission = 'Store:Shops:View';
    static readonly updatePermission = 'Store:Shops:Modify';

    static readonly Fields = fieldsProxy<ShopsRow>();
}
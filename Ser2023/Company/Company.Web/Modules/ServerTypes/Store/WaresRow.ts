﻿import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface WaresRow {
    WaresId?: number;
    WaresCode?: string;
    WaresBarcode?: string;
    WaresLabel?: string;
    WaresName?: string;
    WaresImage?: string;
    CounterpartyId?: string;
    CategoryId?: number;
    MeasureId?: number;
    QuantityPerUnit?: number;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    Discontinued?: boolean;
    AccountId?: number;
    IsActive?: number;
    TenantId?: number;
    CompanyName?: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Phone?: string;
    Type?: number;
    CategoryName?: string;
    Description?: string;
    MeasureName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class WaresRow {
    static readonly idProperty = 'WaresId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'WaresName';
    static readonly localTextPrefix = 'Store.Wares';
    static readonly lookupKey = 'Store.Wares';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<WaresRow>('Store.Wares') }
    static async getLookupAsync() { return getLookupAsync<WaresRow>('Store.Wares') }

    static readonly deletePermission = 'Store:Wares:Delete';
    static readonly insertPermission = 'Store:Wares:Modify';
    static readonly readPermission = 'Store:Wares:View';
    static readonly updatePermission = 'Store:Wares:Modify';

    static readonly Fields = fieldsProxy<WaresRow>();
}
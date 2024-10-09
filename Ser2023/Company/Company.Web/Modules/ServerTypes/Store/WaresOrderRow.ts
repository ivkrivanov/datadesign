import { Gender } from "./Gender";
import { ShippingState } from "./ShippingState";
import { WaresOrderDetailRow } from "./WaresOrderDetailRow";
import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface WaresOrderRow {
    WaresOrderId?: number;
    ShopId?: string;
    CounterpartyId?: string;
    EmployeeId?: number;
    ShipperId?: number;
    OperationTypeId?: number;
    OrderDate?: string;
    RequiredDate?: string;
    ShippedDate?: string;
    DocumentTypeId?: number;
    DocumentNumber?: string;
    DocumentDate?: string;
    IsActive?: number;
    TenantId?: number;
    ShopName?: string;
    ShopContactName?: string;
    ShopContactTitle?: string;
    ShopAddress?: string;
    ShopCity?: string;
    ShopRegion?: string;
    ShopPostalCode?: string;
    ShopCountry?: string;
    ShopPhone?: string;
    CompanyName?: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Phone?: string;
    FullName?: string;
    Gender?: Gender;
    ReportsToFullName?: string;
    ShipperCompanyName?: string;
    ShipperPhone?: string;
    ShippingState?: ShippingState;
    OpCode?: number;
    Operation?: string;
    Total?: number;
    DetailList?: WaresOrderDetailRow[];
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class WaresOrderRow {
    static readonly idProperty = 'WaresOrderId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CounterpartyId';
    static readonly localTextPrefix = 'Store.WaresOrder';
    static readonly lookupKey = 'Store.WaresOrder';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<WaresOrderRow>('Store.WaresOrder') }
    static async getLookupAsync() { return getLookupAsync<WaresOrderRow>('Store.WaresOrder') }

    static readonly deletePermission = 'Store:Wares:Delete';
    static readonly insertPermission = 'Store:Wares:Modify';
    static readonly readPermission = 'Store:Wares:View';
    static readonly updatePermission = 'Store:Wares:Modify';

    static readonly Fields = fieldsProxy<WaresOrderRow>();
}
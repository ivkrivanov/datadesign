import { Gender } from "./Gender";
import { ShippingState } from "./ShippingState";
import { OrderDetailRow } from "./OrderDetailRow";
import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface OrderRow {
    OrderId?: number;
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
    Value?: number;
    VAT?: number;
    Total?: number;
    DetailList?: OrderDetailRow[];
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class OrderRow {
    static readonly idProperty = 'OrderId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CounterpartyId';
    static readonly localTextPrefix = 'Store.Order';
    static readonly lookupKey = 'Store.Order';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<OrderRow>('Store.Order') }
    static async getLookupAsync() { return getLookupAsync<OrderRow>('Store.Order') }

    static readonly deletePermission = 'Store:Order:Delete';
    static readonly insertPermission = 'Store:Order:Modify';
    static readonly readPermission = 'Store:Order:View';
    static readonly updatePermission = 'Store:Order:Modify';

    static readonly Fields = fieldsProxy<OrderRow>();
}
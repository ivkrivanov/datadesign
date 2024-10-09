import { fieldsProxy } from "@serenity-is/corelib/q";

export interface WaresOrderDetailRow {
    WaresOrderId?: number;
    WaresId?: number;
    Quantity?: number;
    SinglePrice?: number;
    Discount?: number;
    DetailId?: number;
    IsActive?: number;
    TenantId?: number;
    WaresOrderShopId?: string;
    WaresOrderCounterpartyId?: string;
    WaresOrderEmployeeId?: number;
    WaresOrderShipperId?: number;
    WaresOrderOperationTypeId?: number;
    WaresOrderOperationTypeOpCode?: number;
    WaresOrderOrderDate?: string;
    WaresOrderRequiredDate?: string;
    WaresOrderShippedDate?: string;
    WaresCode?: string;
    WaresName?: string;
    WaresCounterpartyId?: string;
    WaresCategoryId?: number;
    WaresMeasureId?: number;
    WaresMeasureName?: string;
    WaresQuantityPerUnit?: string;
    WaresUnitPrice?: number;
    WaresSalePrice?: number;
    LineTotal?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class WaresOrderDetailRow {
    static readonly idProperty = 'DetailId';
    static readonly isActiveProperty = 'IsActive';
    static readonly localTextPrefix = 'Store.WaresOrderDetail';
    static readonly deletePermission = 'Store:Wares:Delete';
    static readonly insertPermission = 'Store:Wares:Modify';
    static readonly readPermission = 'Store:Wares:View';
    static readonly updatePermission = 'Store:Wares:Modify';

    static readonly Fields = fieldsProxy<WaresOrderDetailRow>();
}
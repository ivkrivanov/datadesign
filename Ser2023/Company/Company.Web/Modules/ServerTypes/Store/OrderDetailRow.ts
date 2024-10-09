import { fieldsProxy } from "@serenity-is/corelib/q";

export interface OrderDetailRow {
    DetailId?: number;
    OrderId?: number;
    ProductId?: number;
    SinglePrice?: number;
    SalePrice?: number;
    Quantity?: number;
    Discount?: number;
    OrderShopId?: number;
    OrderCounterpartyId?: number;
    OrderEmployeeId?: number;
    OrderShipperId?: number;
    OrderOperationTypeId?: number;
    OrderOperationTypeOpCode?: number;
    OrderDate?: string;
    RequiredDate?: string;
    ShippedDate?: string;
    ProductCode?: string;
    ProductName?: string;
    ProductCounterpartiesId?: number;
    ProductCategoryId?: number;
    ProductQuantityPerUnit?: string;
    ProductUnitPrice?: number;
    ProductSalePrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    LineTotal?: number;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class OrderDetailRow {
    static readonly idProperty = 'DetailId';
    static readonly isActiveProperty = 'IsActive';
    static readonly localTextPrefix = 'Store.OrderDetail';
    static readonly deletePermission = 'Store:Order:Delete';
    static readonly insertPermission = 'Store:Order:Modify';
    static readonly readPermission = 'Store:Order:View';
    static readonly updatePermission = 'Store:Order:Modify';

    static readonly Fields = fieldsProxy<OrderDetailRow>();
}
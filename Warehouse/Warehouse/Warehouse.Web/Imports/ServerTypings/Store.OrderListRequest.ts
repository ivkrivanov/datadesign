namespace Warehouse.Store {
    export interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}


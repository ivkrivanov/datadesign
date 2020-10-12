namespace CoreStore.Reports {
    export interface StoreMoveListRequest extends Serenity.ListRequest {
        ShopID?: number;
        TenantID?: number;
        StartDate?: string;
        EndDate?: string;
    }
}

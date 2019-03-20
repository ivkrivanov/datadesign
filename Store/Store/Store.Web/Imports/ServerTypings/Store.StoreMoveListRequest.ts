namespace Store.Store {
    export interface StoreMoveListRequest extends Serenity.ListRequest {
        ShopID?: number;
        StartDate?: string;
        EndDate?: string;
    }
}


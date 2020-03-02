namespace Store.BasicReports {
    export interface WaresFileListRequest extends Serenity.ListRequest {
        ShopID?: number;
        WaresID?: number;
        TenantID?: number;
        StartDate?: string;
        EndDate?: string;
    }
}


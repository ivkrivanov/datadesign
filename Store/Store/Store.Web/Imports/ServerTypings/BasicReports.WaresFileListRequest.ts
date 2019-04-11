namespace Store.BasicReports {
    export interface WaresFileListRequest extends Serenity.ListRequest {
        ShopID?: number;
        TenantID?: number;
        StartDate?: string;
        EndDate?: string;
    }
}


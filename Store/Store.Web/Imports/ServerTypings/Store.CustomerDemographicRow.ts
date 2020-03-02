namespace Store.Store {
    export interface CustomerDemographicRow {
        Id?: number;
        CustomerTypeId?: string;
        CustomerDesc?: string;
    }

    export namespace CustomerDemographicRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CustomerTypeId';
        export const localTextPrefix = 'Store.CustomerDemographic';

        export declare const enum Fields {
            Id = "Id",
            CustomerTypeId = "CustomerTypeId",
            CustomerDesc = "CustomerDesc"
        }
    }
}


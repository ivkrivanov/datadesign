namespace Store.Store {
    export interface MeasureRow {
        MeasureID?: number;
        MeasureName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace MeasureRow {
        export const idProperty = 'MeasureID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MeasureName';
        export const localTextPrefix = 'Store.Measure';
        export const lookupKey = 'Store.Measure';

        export function getLookup(): Q.Lookup<MeasureRow> {
            return Q.getLookup<MeasureRow>('Store.Measure');
        }

        export declare const enum Fields {
            MeasureID = "MeasureID",
            MeasureName = "MeasureName",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}


namespace Warehouse.Store {
    export interface MeasureRow {
        MeasureId?: number;
        MeasureName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace MeasureRow {
        export const idProperty = 'MeasureId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MeasureName';
        export const localTextPrefix = 'Store.Measure';
        export const lookupKey = 'Store.Measure';

        export function getLookup(): Q.Lookup<MeasureRow> {
            return Q.getLookup<MeasureRow>('Store.Measure');
        }

        export declare const enum Fields {
            MeasureId = "MeasureId",
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


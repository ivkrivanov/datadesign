namespace CoreStore.Store {
    export interface MeasuresRow {
        MeasureId?: number;
        MeasureName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace MeasuresRow {
        export const idProperty = 'MeasureId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'MeasureName';
        export const localTextPrefix = 'Store.Measures';
        export const lookupKey = 'Store.Measures';

        export function getLookup(): Q.Lookup<MeasuresRow> {
            return Q.getLookup<MeasuresRow>('Store.Measures');
        }
        export const deletePermission = 'Store:Measures:Delete';
        export const insertPermission = 'Store:Measures:Modify';
        export const readPermission = 'Store:Measures:View';
        export const updatePermission = 'Store:Measures:Modify';

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

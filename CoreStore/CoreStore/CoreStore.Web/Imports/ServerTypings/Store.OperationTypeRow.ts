namespace CoreStore.Store {
    export interface OperationTypeRow {
        OperationTypeId?: number;
        OpCode?: number;
        Operation?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace OperationTypeRow {
        export const idProperty = 'OperationTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Operation';
        export const localTextPrefix = 'Store.OperationType';
        export const lookupKey = 'Store.OperationType';

        export function getLookup(): Q.Lookup<OperationTypeRow> {
            return Q.getLookup<OperationTypeRow>('Store.OperationType');
        }
        export const deletePermission = 'Store:OperationType:Delete';
        export const insertPermission = 'Store:OperationType:Modify';
        export const readPermission = 'Store:OperationType:View';
        export const updatePermission = 'Store:OperationType:Modify';

        export declare const enum Fields {
            OperationTypeId = "OperationTypeId",
            OpCode = "OpCode",
            Operation = "Operation",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

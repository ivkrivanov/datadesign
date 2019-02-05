namespace Store.Store {
    export interface OperationTypeRow {
        OperationTypeID?: number;
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
        export const idProperty = 'OperationTypeID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Operation';
        export const localTextPrefix = 'Store.OperationType';
        export const lookupKey = 'Store.OperationType';

        export function getLookup(): Q.Lookup<OperationTypeRow> {
            return Q.getLookup<OperationTypeRow>('Store.OperationType');
        }

        export declare const enum Fields {
            OperationTypeID = "OperationTypeID",
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


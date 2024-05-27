import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

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

export abstract class OperationTypeRow {
    static readonly idProperty = 'OperationTypeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Operation';
    static readonly localTextPrefix = 'Store.OperationType';
    static readonly lookupKey = 'Store.OperationType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<OperationTypeRow>('Store.OperationType') }
    static async getLookupAsync() { return getLookupAsync<OperationTypeRow>('Store.OperationType') }

    static readonly deletePermission = 'Store:OperationType:Delete';
    static readonly insertPermission = 'Store:OperationType:Modify';
    static readonly readPermission = 'Store:OperationType:View';
    static readonly updatePermission = 'Store:OperationType:Modify';

    static readonly Fields = fieldsProxy<OperationTypeRow>();
}
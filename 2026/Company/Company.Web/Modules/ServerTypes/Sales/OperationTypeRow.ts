import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

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
    static readonly localTextPrefix = 'Sales.OperationType';
    static readonly lookupKey = 'Sales.OperationType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<OperationTypeRow>('Sales.OperationType') }
    static async getLookupAsync() { return getLookupAsync<OperationTypeRow>('Sales.OperationType') }

    static readonly deletePermission = 'Company:Currency:Delete';
    static readonly insertPermission = 'Company:Currency:Modify';
    static readonly readPermission = 'Company:Currency:View';
    static readonly updatePermission = 'Company:Currency:Modify';

    static readonly Fields = fieldsProxy<OperationTypeRow>();
}
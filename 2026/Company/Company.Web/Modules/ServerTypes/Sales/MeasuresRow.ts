import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

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

export abstract class MeasuresRow {
    static readonly idProperty = 'MeasureId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'MeasureName';
    static readonly localTextPrefix = 'Sales.Measures';
    static readonly lookupKey = 'Sales.Measures';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<MeasuresRow>('Sales.Measures') }
    static async getLookupAsync() { return getLookupAsync<MeasuresRow>('Sales.Measures') }

    static readonly deletePermission = 'Company:Currency:Delete';
    static readonly insertPermission = 'Company:Currency:Modify';
    static readonly readPermission = 'Company:Currency:View';
    static readonly updatePermission = 'Company:Currency:Modify';

    static readonly Fields = fieldsProxy<MeasuresRow>();
}
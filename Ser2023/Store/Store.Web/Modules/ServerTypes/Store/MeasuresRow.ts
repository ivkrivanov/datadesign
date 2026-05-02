import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

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
    static readonly localTextPrefix = 'Store.Measures';
    static readonly lookupKey = 'Store.Measures';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<MeasuresRow>('Store.Measures') }
    static async getLookupAsync() { return getLookupAsync<MeasuresRow>('Store.Measures') }

    static readonly deletePermission = 'Store:Measures:Delete';
    static readonly insertPermission = 'Store:Measures:Modify';
    static readonly readPermission = 'Store:Measures:View';
    static readonly updatePermission = 'Store:Measures:Modify';

    static readonly Fields = fieldsProxy<MeasuresRow>();
}

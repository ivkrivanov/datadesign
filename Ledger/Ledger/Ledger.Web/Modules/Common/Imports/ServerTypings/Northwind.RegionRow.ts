namespace Ledger.Northwind {
    export interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
        TenantId?: number;
    }

    export namespace RegionRow {
        export const idProperty = 'RegionID';
        export const nameProperty = 'RegionDescription';
        export const localTextPrefix = 'Northwind.Region';
        export const lookupKey = 'Northwind.Region';

        export function getLookup(): Q.Lookup<RegionRow> {
            return Q.getLookup<RegionRow>('Northwind.Region');
        }

        export namespace Fields {
            export declare const RegionID: string;
            export declare const RegionDescription: string;
            export declare const TenantId: string;
        }

        ['RegionID', 'RegionDescription', 'TenantId'].forEach(x => (<any>Fields)[x] = x);
    }
}


namespace Serene1.Northwind {
    export interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }

    export namespace RegionRow {
        export const idProperty = 'RegionID';
        export const nameProperty = 'RegionDescription';
        export const localTextPrefix = 'Northwind.Region';
        export const lookupKey = '';

        export function getLookup(): Q.Lookup<RegionRow> {
            return Q.getLookup<RegionRow>('');
        }

        export declare const enum Fields {
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}


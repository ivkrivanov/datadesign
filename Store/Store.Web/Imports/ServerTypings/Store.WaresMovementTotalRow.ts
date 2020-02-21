namespace Store.Store {
    export interface WaresMovementTotalRow {
        WaresMoveID?: number;
        Total?: number;
    }

    export namespace WaresMovementTotalRow {
        export const idProperty = 'WaresMoveID';
        export const localTextPrefix = 'Store.WaresMovementTotal';

        export declare const enum Fields {
            WaresMoveID = "WaresMoveID",
            Total = "Total"
        }
    }
}


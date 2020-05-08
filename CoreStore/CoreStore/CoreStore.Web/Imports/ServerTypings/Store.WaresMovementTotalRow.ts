namespace CoreStore.Store {
    export interface WaresMovementTotalRow {
        WaresMoveId?: number;
        Total?: number;
    }

    export namespace WaresMovementTotalRow {
        export const idProperty = 'WaresMoveId';
        export const localTextPrefix = 'Store.WaresMovementTotal';
        export const deletePermission = 'Store:Wares:Delete';
        export const insertPermission = 'Store:Wares:Modify';
        export const readPermission = 'Store:Wares:View';
        export const updatePermission = 'Store:Wares:Modify';

        export declare const enum Fields {
            WaresMoveId = "WaresMoveId",
            Total = "Total"
        }
    }
}

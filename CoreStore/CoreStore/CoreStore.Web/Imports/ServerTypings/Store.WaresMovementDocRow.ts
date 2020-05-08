namespace CoreStore.Store {
    export interface WaresMovementDocRow {
        WaresMoveId?: number;
        DocumentTypeId?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        DocumentTypeDocumentName?: string;
    }

    export namespace WaresMovementDocRow {
        export const idProperty = 'WaresMoveId';
        export const nameProperty = 'DocumentNumber';
        export const localTextPrefix = 'Store.WaresMovementDoc';
        export const deletePermission = 'Store:Wares:Delete';
        export const insertPermission = 'Store:Wares:Modify';
        export const readPermission = 'Store:Wares:View';
        export const updatePermission = 'Store:Wares:Modify';

        export declare const enum Fields {
            WaresMoveId = "WaresMoveId",
            DocumentTypeId = "DocumentTypeId",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            DocumentTypeDocumentName = "DocumentTypeDocumentName"
        }
    }
}

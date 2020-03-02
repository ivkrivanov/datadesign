namespace Store.Store {
    export interface WaresMovementDocRow {
        WaresMoveID?: number;
        DocumentTypeID?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        DocumentTypeDocumentName?: string;
    }

    export namespace WaresMovementDocRow {
        export const idProperty = 'WaresMoveID';
        export const nameProperty = 'DocumentNumber';
        export const localTextPrefix = 'Store.WaresMovementDoc';

        export declare const enum Fields {
            WaresMoveID = "WaresMoveID",
            DocumentTypeID = "DocumentTypeID",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            DocumentTypeDocumentName = "DocumentTypeDocumentName"
        }
    }
}


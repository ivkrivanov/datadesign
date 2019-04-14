namespace Store.Store {
    export interface ProductMovementDocRow {
        ProductMoveID?: number;
        DocumentTypeID?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        DocumentTypeDocumentName?: string;
    }

    export namespace ProductMovementDocRow {
        export const idProperty = 'ProductMoveID';
        export const nameProperty = 'DocumentNumber';
        export const localTextPrefix = 'Store.ProductMovementDoc';

        export declare const enum Fields {
            ProductMoveID = "ProductMoveID",
            DocumentTypeID = "DocumentTypeID",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            DocumentTypeDocumentName = "DocumentTypeDocumentName"
        }
    }
}


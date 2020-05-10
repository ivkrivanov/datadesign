namespace CoreStore.Store {
    export interface ProductMovementDocRow {
        ProductMoveId?: number;
        DocumentTypeId?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        DocumentTypeDocumentName?: string;
    }

    export namespace ProductMovementDocRow {
        export const idProperty = 'ProductMoveId';
        export const nameProperty = 'DocumentNumber';
        export const localTextPrefix = 'Store.ProductMovementDoc';
        export const deletePermission = 'Store:Product:Delete';
        export const insertPermission = 'Store:Product:Modify';
        export const readPermission = 'Store:Product:View';
        export const updatePermission = 'Store:Product:Modify';

        export declare const enum Fields {
            ProductMoveId = "ProductMoveId",
            DocumentTypeId = "DocumentTypeId",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            DocumentTypeDocumentName = "DocumentTypeDocumentName"
        }
    }
}

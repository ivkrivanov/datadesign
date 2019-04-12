
namespace Store.Store {
    export interface ProductMovementDocRow {
        ProductMoveId?: number;
        DocumentTypeId?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        DocumentTypeDocumentName?: string;
        DocumentTypeIsActive?: number;
        DocumentTypeTenantId?: number;
    }

    export namespace ProductMovementDocRow {
        export const idProperty = 'ProductMoveId';
        export const nameProperty = 'DocumentNumber';
        export const localTextPrefix = 'Store.ProductMovementDoc';

        export namespace Fields {
            export declare const ProductMoveId;
            export declare const DocumentTypeId;
            export declare const DocumentNumber;
            export declare const DocumentDate;
            export declare const DocumentTypeDocumentName;
            export declare const DocumentTypeIsActive;
            export declare const DocumentTypeTenantId;
        }

        [
            'ProductMoveId',
            'DocumentTypeId',
            'DocumentNumber',
            'DocumentDate',
            'DocumentTypeDocumentName',
            'DocumentTypeIsActive',
            'DocumentTypeTenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
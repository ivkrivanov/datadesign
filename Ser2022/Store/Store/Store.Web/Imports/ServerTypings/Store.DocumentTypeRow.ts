namespace Store.Store {
    export interface DocumentTypeRow {
        DocumentTypeId?: number;
        DocumentName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace DocumentTypeRow {
        export const idProperty = 'DocumentTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'DocumentName';
        export const localTextPrefix = 'Store.DocumentType';
        export const lookupKey = 'Store.DocumentType';

        export function getLookup(): Q.Lookup<DocumentTypeRow> {
            return Q.getLookup<DocumentTypeRow>('Store.DocumentType');
        }
        export const deletePermission = 'Store:DocumentType:Delete';
        export const insertPermission = 'Store:DocumentType:Modify';
        export const readPermission = 'Store:DocumentType:View';
        export const updatePermission = 'Store:DocumentType:Modify';

        export declare const enum Fields {
            DocumentTypeId = "DocumentTypeId",
            DocumentName = "DocumentName",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

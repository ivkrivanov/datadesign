namespace Store.Store {
    export interface DocumentTypeRow {
        DocumentTypeID?: number;
        DocumentName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace DocumentTypeRow {
        export const idProperty = 'DocumentTypeID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'DocumentName';
        export const localTextPrefix = 'Store.DocumentType';
        export const lookupKey = 'Store.DocumentType';

        export function getLookup(): Q.Lookup<DocumentTypeRow> {
            return Q.getLookup<DocumentTypeRow>('Store.DocumentType');
        }

        export declare const enum Fields {
            DocumentTypeID = "DocumentTypeID",
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


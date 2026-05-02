import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

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

export abstract class DocumentTypeRow {
    static readonly idProperty = 'DocumentTypeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'DocumentName';
    static readonly localTextPrefix = 'Store.DocumentType';
    static readonly lookupKey = 'Store.DocumentType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<DocumentTypeRow>('Store.DocumentType') }
    static async getLookupAsync() { return getLookupAsync<DocumentTypeRow>('Store.DocumentType') }

    static readonly deletePermission = 'Store:DocumentType:Delete';
    static readonly insertPermission = 'Store:DocumentType:Modify';
    static readonly readPermission = 'Store:DocumentType:View';
    static readonly updatePermission = 'Store:DocumentType:Modify';

    static readonly Fields = fieldsProxy<DocumentTypeRow>();
}

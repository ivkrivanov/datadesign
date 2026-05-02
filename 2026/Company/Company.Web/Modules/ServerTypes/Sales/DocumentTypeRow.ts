import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

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
    static readonly localTextPrefix = 'Sales.DocumentType';
    static readonly lookupKey = 'Sales.DokumenyYype';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<DocumentTypeRow>('Sales.DokumenyYype') }
    static async getLookupAsync() { return getLookupAsync<DocumentTypeRow>('Sales.DokumenyYype') }

    static readonly deletePermission = 'Company:Currency:Delete';
    static readonly insertPermission = 'Company:Currency:Modify';
    static readonly readPermission = 'Company:Currency:View';
    static readonly updatePermission = 'Company:Currency:Modify';

    static readonly Fields = fieldsProxy<DocumentTypeRow>();
}
import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { DocumentTypeRow } from "./DocumentTypeRow";

export interface DocumentTypeColumns {
    DocumentTypeId: Column<DocumentTypeRow>;
    DocumentName: Column<DocumentTypeRow>;
}

export class DocumentTypeColumns extends ColumnsBase<DocumentTypeRow> {
    static readonly columnsKey = 'Sales.DocumentType';
    static readonly Fields = fieldsProxy<DocumentTypeColumns>();
}
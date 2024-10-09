import { Decorators, EntityGrid } from "@serenity-is/corelib";
import { DocumentTypeColumns, DocumentTypeRow, DocumentTypeService } from "../../ServerTypes/Store";
import { DocumentTypeDialog } from "./DocumentTypeDialog";

@Decorators.registerClass('Company.Store.DocumentTypeGrid')

export class DocumentTypeGrtid extends EntityGrid<DocumentTypeRow, any> {
    protected getColumnsKey() { return DocumentTypeColumns.columnsKey; }
    protected getDialogType() { return DocumentTypeDialog; }
    protected getIdProperty() { return DocumentTypeRow.idProperty; }
    protected getInsertPermission() { return DocumentTypeRow.insertPermission; }
    protected getLocalTextPrefix() { return DocumentTypeRow.localTextPrefix; }
    protected getService() { return DocumentTypeService.baseUrl; }
}



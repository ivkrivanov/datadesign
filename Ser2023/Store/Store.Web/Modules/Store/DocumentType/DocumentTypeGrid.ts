import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { DocumentTypeColumns, DocumentTypeRow, DocumentTypeService } from '../../ServerTypes/Store';
import { DocumentTypeDialog } from './DocumentTypeDialog';

@Decorators.registerClass('Store.Store.DocumentTypeGrid')
export class DocumentTypeGrid extends EntityGrid<DocumentTypeRow, any> {
    protected getColumnsKey() { return DocumentTypeColumns.columnsKey; }
    protected getDialogType() { return DocumentTypeDialog; }
    protected getIdProperty() { return DocumentTypeRow.idProperty; }
    protected getInsertPermission() { return DocumentTypeRow.insertPermission; }
    protected getLocalTextPrefix() { return DocumentTypeRow.localTextPrefix; }
    protected getService() { return DocumentTypeService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}
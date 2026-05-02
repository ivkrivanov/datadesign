import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { DocumentTypeColumns, DocumentTypeRow, DocumentTypeService } from '../../ServerTypes/Store';
import { DocumentTypeDialog } from './DocumentTypeDialog';

@Decorators.registerClass('Company.Store.DocumentTypeGrid')
export class DocumentTypeGrid extends EntityGrid<DocumentTypeRow, any> {
    protected getColumnsKey() { return DocumentTypeColumns.columnsKey; }
    protected getDialogType() { return DocumentTypeDialog; }
    protected getRowDefinition() { return DocumentTypeRow; }
    protected getService() { return DocumentTypeService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}
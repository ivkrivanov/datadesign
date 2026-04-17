import { EntityGrid } from '@serenity-is/corelib';
import { DocumentTypeColumns, DocumentTypeRow, DocumentTypeService } from '../../ServerTypes/Sales';
import { DocumentTypeDialog } from './DocumentTypeDialog';

export class DocumentTypeGrid extends EntityGrid<DocumentTypeRow> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return DocumentTypeColumns.columnsKey; }
    protected override getDialogType() { return DocumentTypeDialog; }
    protected override getRowDefinition() { return DocumentTypeRow; }
    protected override getService() { return DocumentTypeService.baseUrl; }
}
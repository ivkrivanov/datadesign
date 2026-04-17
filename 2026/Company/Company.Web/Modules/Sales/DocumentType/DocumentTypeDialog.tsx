import { EntityDialog } from '@serenity-is/corelib';
import { DocumentTypeForm, DocumentTypeRow, DocumentTypeService } from '../../ServerTypes/Sales';

export class DocumentTypeDialog extends EntityDialog<DocumentTypeRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return DocumentTypeForm.formKey; }
    protected override getRowDefinition() { return DocumentTypeRow; }
    protected override getService() { return DocumentTypeService.baseUrl; }

    protected form = new DocumentTypeForm(this.idPrefix);
}
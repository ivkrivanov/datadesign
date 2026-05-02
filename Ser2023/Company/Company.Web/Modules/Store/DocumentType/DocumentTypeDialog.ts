import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { DocumentTypeForm, DocumentTypeRow, DocumentTypeService } from '../../ServerTypes/Store';

@Decorators.registerClass('Company.Store.DocumentTypeDialog')
export class DocumentTypeDialog extends EntityDialog<DocumentTypeRow, any> {
    protected getFormKey() { return DocumentTypeForm.formKey; }
    protected getRowDefinition() { return DocumentTypeRow; }
    protected getService() { return DocumentTypeService.baseUrl; }

    protected form = new DocumentTypeForm(this.idPrefix);
}
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { ContactTypeForm, ContactTypeRow, ContactTypeService } from '../../ServerTypes/Company';

@Decorators.registerClass('Company.Company.ContactTypeDialog')
export class ContactTypeDialog extends EntityDialog<ContactTypeRow, any> {
    protected getFormKey() { return ContactTypeForm.formKey; }
    protected getRowDefinition() { return ContactTypeRow; }
    protected getService() { return ContactTypeService.baseUrl; }

    protected form = new ContactTypeForm(this.idPrefix);
}
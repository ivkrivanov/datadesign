import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { PhoneNumberTypeForm, PhoneNumberTypeRow, PhoneNumberTypeService } from '../../ServerTypes/Company';

@Decorators.registerClass('Company.Company.PhoneNumberTypeDialog')
export class PhoneNumberTypeDialog extends EntityDialog<PhoneNumberTypeRow, any> {
    protected getFormKey() { return PhoneNumberTypeForm.formKey; }
    protected getRowDefinition() { return PhoneNumberTypeRow; }
    protected getService() { return PhoneNumberTypeService.baseUrl; }

    protected form = new PhoneNumberTypeForm(this.idPrefix);
}
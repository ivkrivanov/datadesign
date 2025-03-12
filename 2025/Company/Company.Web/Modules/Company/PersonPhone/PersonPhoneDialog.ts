import { PersonPhoneForm, PersonPhoneRow, PersonPhoneService } from '@/ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.PersonPhoneDialog')
export class PersonPhoneDialog extends EntityDialog<PersonPhoneRow, any> {
    protected getFormKey() { return PersonPhoneForm.formKey; }
    protected getRowDefinition() { return PersonPhoneRow; }
    protected getService() { return PersonPhoneService.baseUrl; }

    protected form = new PersonPhoneForm(this.idPrefix);
}
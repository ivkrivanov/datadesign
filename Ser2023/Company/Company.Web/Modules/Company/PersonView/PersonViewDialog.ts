import { PersonViewForm, PersonViewRow, PersonViewService } from '@/ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.PersonViewDialog')
export class PersonViewDialog extends EntityDialog<PersonViewRow, any> {
    protected getFormKey() { return PersonViewForm.formKey; }
    protected getRowDefinition() { return PersonViewRow; }
    protected getService() { return PersonViewService.baseUrl; }

    protected form = new PersonViewForm(this.idPrefix);
}
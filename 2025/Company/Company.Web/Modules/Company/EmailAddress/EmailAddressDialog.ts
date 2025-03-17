import { EmailAddressForm, EmailAddressRow, EmailAddressService } from '../../ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.EmailAddressDialog')
export class EmailAddressDialog extends EntityDialog<EmailAddressRow, any> {
    protected getFormKey() { return EmailAddressForm.formKey; }
    protected getRowDefinition() { return EmailAddressRow; }
    protected getService() { return EmailAddressService.baseUrl; }

    protected form = new EmailAddressForm(this.idPrefix);
}
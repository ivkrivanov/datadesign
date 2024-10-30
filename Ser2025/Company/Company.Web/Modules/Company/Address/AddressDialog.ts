import { AddressForm, AddressRow, AddressService } from '@/ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.AddressDialog')
export class AddressDialog extends EntityDialog<AddressRow, any> {
    protected getFormKey() { return AddressForm.formKey; }
    protected getRowDefinition() { return AddressRow; }
    protected getService() { return AddressService.baseUrl; }

    protected form = new AddressForm(this.idPrefix);
}
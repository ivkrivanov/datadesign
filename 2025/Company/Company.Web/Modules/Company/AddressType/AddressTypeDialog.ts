import { AddressTypeForm, AddressTypeRow, AddressTypeService } from '../../ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.AddressTypeDialog')
export class AddressTypeDialog extends EntityDialog<AddressTypeRow, any> {
    protected getFormKey() { return AddressTypeForm.formKey; }
    protected getRowDefinition() { return AddressTypeRow; }
    protected getService() { return AddressTypeService.baseUrl; }

    protected form = new AddressTypeForm(this.idPrefix);
}
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { AddressForm, AddressRow, AddressService } from '../../ServerTypes/Address';

@Decorators.registerClass('Address.Address.AddressDialog')
export class AddressDialog extends EntityDialog<AddressRow, any> {
    protected getFormKey() { return AddressForm.formKey; }
    protected getIdProperty() { return AddressRow.idProperty; }
    protected getLocalTextPrefix() { return AddressRow.localTextPrefix; }
    protected getNameProperty() { return AddressRow.nameProperty; }
    protected getService() { return AddressService.baseUrl; }
    protected getDeletePermission() { return AddressRow.deletePermission; }
    protected getInsertPermission() { return AddressRow.insertPermission; }
    protected getUpdatePermission() { return AddressRow.updatePermission; }

    protected form = new AddressForm(this.idPrefix);
}
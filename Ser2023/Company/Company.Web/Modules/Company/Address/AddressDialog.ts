import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { AddressForm, AddressRow, AddressService } from '../../ServerTypes/Company';

@Decorators.registerClass('Company.Company.AddressDialog')
export class AddressDialog extends EntityDialog<AddressRow, any> {
    protected getFormKey() { return AddressForm.formKey; }
    protected getRowDefinition() { return AddressRow; }
    protected getIdProperty() { return AddressRow.idProperty; }
    protected getLocalTextPrefix() { return AddressRow.localTextPrefix; }
    protected getNameProperty() { return AddressRow.nameProperty; }
    protected getDeletePermission() { return AddressRow.deletePermission; }
    protected getInsertPermission() { return AddressRow.insertPermission; }
    protected getUpdatePermission() { return AddressRow.updatePermission; }
    protected getService() { return AddressService.baseUrl; }

    protected form = new AddressForm(this.idPrefix);
}
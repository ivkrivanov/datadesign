import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { AddressTypeForm, AddressTypeRow, AddressTypeService } from "@/ServerTypes/Address";

@Decorators.registerClass('Address.Address.AddressTypeDialog')
export class AddressTypeDialog extends EntityDialog<AddressTypeRow, any> {
    protected getFormKey() { return AddressTypeForm.formKey; }
    protected getRowDefinition() { return AddressTypeRow; }
    protected getIdProperty() { return AddressTypeRow.idProperty; }
    protected getLocalTextPrefix() { return AddressTypeRow.localTextPrefix; }
    protected getNameProperty() { return AddressTypeRow.nameProperty; }
    protected getService() { return AddressTypeService.baseUrl; }
    protected getDeletePermission() { return AddressTypeRow.deletePermission; }
    protected getInsertPermission() { return AddressTypeRow.insertPermission; }
    protected getUpdatePermission() { return AddressTypeRow.updatePermission; }

    protected form = new AddressTypeForm(this.idPrefix);
}
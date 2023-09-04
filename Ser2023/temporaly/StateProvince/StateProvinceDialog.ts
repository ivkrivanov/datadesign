import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { StateProvinceForm, StateProvinceRow, StateProvinceService } from '../../ServerTypes/Address';

@Decorators.registerClass('Address.Address.StateProvinceDialog')
export class StateProvinceDialog extends EntityDialog<StateProvinceRow, any> {
    protected getFormKey() { return StateProvinceForm.formKey; }
    protected getIdProperty() { return StateProvinceRow.idProperty; }
    protected getLocalTextPrefix() { return StateProvinceRow.localTextPrefix; }
    protected getNameProperty() { return StateProvinceRow.nameProperty; }
    protected getService() { return StateProvinceService.baseUrl; }
    protected getDeletePermission() { return StateProvinceRow.deletePermission; }
    protected getInsertPermission() { return StateProvinceRow.insertPermission; }
    protected getUpdatePermission() { return StateProvinceRow.updatePermission; }

    protected form = new StateProvinceForm(this.idPrefix);
}
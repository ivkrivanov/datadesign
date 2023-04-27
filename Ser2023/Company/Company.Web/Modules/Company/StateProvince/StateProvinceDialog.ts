import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { StateProvinceForm, StateProvinceRow, StateProvinceService } from '@/ServerTypes/Company';

@Decorators.registerClass('Company.Company.StateProvinceDialog')
export class StateProvinceDialog extends EntityDialog<StateProvinceRow, any> {
    protected getFormKey() { return StateProvinceForm.formKey; }
    protected getRowDefinition() { return StateProvinceRow; }
    protected getIdProperty() { return StateProvinceRow.idProperty; }
    protected getLocalTextPrefix() { return StateProvinceRow.localTextPrefix; }
    protected getNameProperty() { return StateProvinceRow.nameProperty; }
    protected getService() { return StateProvinceService.baseUrl; }
    protected getDeletePermission() { return StateProvinceRow.deletePermission; }
    protected getInsertPermission() { return StateProvinceRow.insertPermission; }
    protected getUpdatePermission() { return StateProvinceRow.updatePermission; }

    protected form = new StateProvinceForm(this.idPrefix);

    protected loadEntity(data) {
        super.loadEntity(data);



        if (this.isNew()) {
            //this.form.Rowguid.element.toggleClass('required', this.isNew().valueOf(GUID)
            //    .closest('.field').find('sup').toggle(this.isNew())
            //this.form.Rowguid.value = guid.newguid
        }




    }
}
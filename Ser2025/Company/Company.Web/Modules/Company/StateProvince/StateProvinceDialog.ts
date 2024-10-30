import { StateProvinceForm, StateProvinceRow, StateProvinceService } from '@/ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.StateProvinceDialog')
export class StateProvinceDialog extends EntityDialog<StateProvinceRow, any> {
    protected getFormKey() { return StateProvinceForm.formKey; }
    protected getRowDefinition() { return StateProvinceRow; }
    protected getService() { return StateProvinceService.baseUrl; }

    protected form = new StateProvinceForm(this.idPrefix);
}
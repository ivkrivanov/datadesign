import { ProvinceForm, ProvinceRow, ProvinceService } from '../../ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.ProvinceDialog')
export class ProvinceDialog extends EntityDialog<ProvinceRow, any> {
    protected getFormKey() { return ProvinceForm.formKey; }
    protected getRowDefinition() { return ProvinceRow; }
    protected getService() { return ProvinceService.baseUrl; }

    protected form = new ProvinceForm(this.idPrefix);
}
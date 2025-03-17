import { CurrencyRateForm, CurrencyRateRow, CurrencyRateService } from '../../ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.CurrencyRateDialog')
//@Decorators.registerClass()
//@Decorators.panel()  //.maximizable()
export class CurrencyRateDialog<P = {}> extends EntityDialog<CurrencyRateRow, P> {
    protected getFormKey() { return CurrencyRateForm.formKey; }
    protected getRowDefinition() { return CurrencyRateRow; }
    protected getService() { return CurrencyRateService.baseUrl; }

    protected form = new CurrencyRateForm(this.idPrefix);
}
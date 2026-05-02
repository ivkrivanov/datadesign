import { CurrencyRateForm, CurrencyRateRow, CurrencyRateService } from '../../ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import "./CurrencyRateDialog.css"

//@Decorators.registerClass('Company.Company.CurrencyRateDialog')
@Decorators.registerClass()
@Decorators.maximizable()  //.panel()  /
export class CurrencyRateDialog<P = {}> extends EntityDialog<CurrencyRateRow, P> {
    protected getFormKey() { return CurrencyRateForm.formKey; }
    protected getRowDefinition() { return CurrencyRateRow; }
    protected getService() { return CurrencyRateService.baseUrl; }

    protected form = new CurrencyRateForm(this.idPrefix);
}
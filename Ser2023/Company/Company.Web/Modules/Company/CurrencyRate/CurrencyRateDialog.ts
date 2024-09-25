import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { CurrencyRateForm, CurrencyRateRow, CurrencyRateService } from '@/ServerTypes/Company';

@Decorators.registerClass('Company.Company.CurrencyRateDialog')
export class CurrencyRateDialog extends EntityDialog<CurrencyRateRow, any> {
    protected getFormKey() { return CurrencyRateForm.formKey; }
    protected getRowDefinition() { return CurrencyRateRow; }
    protected getService() { return CurrencyRateService.baseUrl; }

    protected form = new CurrencyRateForm(this.idPrefix);
}
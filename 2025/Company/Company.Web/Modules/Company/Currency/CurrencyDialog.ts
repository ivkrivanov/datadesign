import { CurrencyForm, CurrencyRow, CurrencyService } from '@/ServerTypes/Company';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Company.Company.CurrencyDialog')
export class CurrencyDialog extends EntityDialog<CurrencyRow, any> {
    protected getFormKey() { return CurrencyForm.formKey; }
    protected getRowDefinition() { return CurrencyRow; }
    protected getService() { return CurrencyService.baseUrl; }

    protected form = new CurrencyForm(this.idPrefix);
}
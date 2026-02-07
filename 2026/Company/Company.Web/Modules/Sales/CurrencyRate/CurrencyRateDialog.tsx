import { EntityDialog } from '@serenity-is/corelib';
import { CurrencyRateForm, CurrencyRateRow, CurrencyRateService } from '../../ServerTypes/Sales';

export class CurrencyRateDialog extends EntityDialog<CurrencyRateRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return CurrencyRateForm.formKey; }
    protected override getRowDefinition() { return CurrencyRateRow; }
    protected override getService() { return CurrencyRateService.baseUrl; }

    protected form = new CurrencyRateForm(this.idPrefix);
}
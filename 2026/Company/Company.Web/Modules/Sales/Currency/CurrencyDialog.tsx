import { EntityDialog } from '@serenity-is/corelib';
import { CurrencyForm, CurrencyRow, CurrencyService } from '../../ServerTypes/Sales';

export class CurrencyDialog extends EntityDialog<CurrencyRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return CurrencyForm.formKey; }
    protected override getRowDefinition() { return CurrencyRow; }
    protected override getService() { return CurrencyService.baseUrl; }

    protected form = new CurrencyForm(this.idPrefix);
}
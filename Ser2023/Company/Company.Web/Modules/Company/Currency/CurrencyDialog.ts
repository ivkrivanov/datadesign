import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { CurrencyForm, CurrencyRow, CurrencyService } from '@/ServerTypes/Company';

@Decorators.registerClass('Company.Company.CurrencyDialog')
export class CurrencyDialog extends EntityDialog<CurrencyRow, any> {
    protected getFormKey() { return CurrencyForm.formKey; }
    protected getRowDefinition() { return CurrencyRow; }
    protected getIdProperty() { return CurrencyRow.idProperty; }

    protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
    protected getNameProperty() { return CurrencyRow.nameProperty; }
    protected getDeletePermission() { return CurrencyRow.deletePermission; }
    protected getInsertPermission() { return CurrencyRow.insertPermission; }
    protected getUpdatePermission() { return CurrencyRow.updatePermission; }
    protected getService() { return CurrencyService.baseUrl; }

    protected form = new CurrencyForm(this.idPrefix);
}
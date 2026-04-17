import { EntityDialog } from '@serenity-is/corelib';
import { AccountsForm, AccountsRow, AccountsService } from '../../ServerTypes/Sales';

export class AccountsDialog extends EntityDialog<AccountsRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return AccountsForm.formKey; }
    protected override getRowDefinition() { return AccountsRow; }
    protected override getService() { return AccountsService.baseUrl; }

    protected form = new AccountsForm(this.idPrefix);
}
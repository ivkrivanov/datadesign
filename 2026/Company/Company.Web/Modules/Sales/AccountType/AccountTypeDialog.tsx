import { EntityDialog } from '@serenity-is/corelib';
import { AccountTypeForm, AccountTypeRow, AccountTypeService } from '../../ServerTypes/Sales';

export class AccountTypeDialog extends EntityDialog<AccountTypeRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return AccountTypeForm.formKey; }
    protected override getRowDefinition() { return AccountTypeRow; }
    protected override getService() { return AccountTypeService.baseUrl; }

    protected form = new AccountTypeForm(this.idPrefix);
}
import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface AccountTypeForm {
    Description: StringEditor;
}

export class AccountTypeForm extends PrefixedContext {
    static readonly formKey = 'Sales.AccountType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AccountTypeForm.init) {
            AccountTypeForm.init = true;

            var w0 = StringEditor;

            initFormType(AccountTypeForm, [
                'Description', w0
            ]);
        }
    }
}
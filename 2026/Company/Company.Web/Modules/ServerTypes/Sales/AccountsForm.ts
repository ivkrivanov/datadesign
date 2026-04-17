import { DateEditor, initFormType, IntegerEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface AccountsForm {
    Account: IntegerEditor;
    SubAccount: IntegerEditor;
    AccountTypeId: ServiceLookupEditor;
    Description: StringEditor;
    StartDate: DateEditor;
    EndDate: DateEditor;
}

export class AccountsForm extends PrefixedContext {
    static readonly formKey = 'Sales.Accounts';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AccountsForm.init) {
            AccountsForm.init = true;

            var w0 = IntegerEditor;
            var w1 = ServiceLookupEditor;
            var w2 = StringEditor;
            var w3 = DateEditor;

            initFormType(AccountsForm, [
                'Account', w0,
                'SubAccount', w0,
                'AccountTypeId', w1,
                'Description', w2,
                'StartDate', w3,
                'EndDate', w3
            ]);
        }
    }
}
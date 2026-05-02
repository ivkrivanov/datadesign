import { LookupEditor, StringEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface EmailAddressForm {
    BusinessEntityId: LookupEditor;
    EmailAddress: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class EmailAddressForm extends PrefixedContext {
    static readonly formKey = 'Company.EmailAddress';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!EmailAddressForm.init)  {
            EmailAddressForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;
            var w2 = IntegerEditor;

            initFormType(EmailAddressForm, [
                'BusinessEntityId', w0,
                'EmailAddress', w1,
                'IsActive', w2,
                'TenantId', w2
            ]);
        }
    }
}
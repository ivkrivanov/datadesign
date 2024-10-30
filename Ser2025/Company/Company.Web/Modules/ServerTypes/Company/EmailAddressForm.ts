import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface EmailAddressForm {
    BusinessEntityId: IntegerEditor;
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
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(EmailAddressForm, [
            'BusinessEntityId', w0,
            'EmailAddress', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
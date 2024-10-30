import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface PhoneNumberTypeForm {
    Name: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class PhoneNumberTypeForm extends PrefixedContext {
    static readonly formKey = 'Company.PhoneNumberType';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!PhoneNumberTypeForm.init)  {
            PhoneNumberTypeForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(PhoneNumberTypeForm, [
            'Name', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
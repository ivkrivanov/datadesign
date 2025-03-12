import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface PersonPhoneForm {
    PhoneNumber: StringEditor;
    PhoneNumberTypeId: IntegerEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class PersonPhoneForm extends PrefixedContext {
    static readonly formKey = 'Company.PersonPhone';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!PersonPhoneForm.init)  {
            PersonPhoneForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(PersonPhoneForm, [
            'PhoneNumber', w1,
            'PhoneNumberTypeId', w0,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
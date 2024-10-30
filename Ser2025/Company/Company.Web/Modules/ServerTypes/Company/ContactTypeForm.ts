import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface ContactTypeForm {
    Name: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class ContactTypeForm extends PrefixedContext {
    static readonly formKey = 'Company.ContactType';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!ContactTypeForm.init)  {
            ContactTypeForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(ContactTypeForm, [
            'Name', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface AddressTypeForm {
    AddressTypeName: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class AddressTypeForm extends PrefixedContext {
    static readonly formKey = 'Company.AddressType';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!AddressTypeForm.init)  {
            AddressTypeForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(AddressTypeForm, [
            'AddressTypeName', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
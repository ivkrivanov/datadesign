import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface AddressForm {
    AddressLine1: StringEditor;
    AddressLine2: StringEditor;
    City: StringEditor;
    CountryCode: StringEditor;
    StateProvinceId: IntegerEditor;
    PostalCode: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class AddressForm extends PrefixedContext {
    static readonly formKey = 'Company.Address';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!AddressForm.init)  {
            AddressForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(AddressForm, [
            'AddressLine1', w1,
            'AddressLine2', w1,
            'City', w1,
            'CountryCode', w1,
            'StateProvinceId', w0,
            'PostalCode', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
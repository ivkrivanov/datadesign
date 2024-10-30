import { PrefixedContext, IntegerEditor, initFormType } from '@serenity-is/corelib';

export interface BusinessEntityAddressForm {
    AddressId: IntegerEditor;
    AddressTypeId: IntegerEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class BusinessEntityAddressForm extends PrefixedContext {
    static readonly formKey = 'Company.BusinessEntityAddress';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!BusinessEntityAddressForm.init)  {
            BusinessEntityAddressForm.init = true;
            
            var w0 = IntegerEditor;

            initFormType(BusinessEntityAddressForm, [
            'AddressId', w0,
            'AddressTypeId', w0,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
import { ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BusinessEntityAddressForm {
    AddressTypeId: ServiceLookupEditor;
    AddressId: ServiceLookupEditor;
}

export class BusinessEntityAddressForm extends PrefixedContext {
    static readonly formKey = 'Company.BusinessEntityAddress';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityAddressForm.init)  {
            BusinessEntityAddressForm.init = true;

            var w0 = ServiceLookupEditor;

            initFormType(BusinessEntityAddressForm, [
                'AddressTypeId', w0,
                'AddressId', w0
            ]);
        }
    }
}
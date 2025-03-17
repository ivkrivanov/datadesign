import { ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BusinessEntityAddressForm {
    AddressId: ServiceLookupEditor;
    AddressTypeId: ServiceLookupEditor;
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
                'AddressId', w0,
                'AddressTypeId', w0
            ]);
        }
    }
}
import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityAddressForm {
    AddressId: StringEditor;
    AddressTypeId: StringEditor;
}

export class BusinessEntityAddressForm extends PrefixedContext {
    static formKey = 'Company.BusinessEntityAddress';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityAddressForm.init)  {
            BusinessEntityAddressForm.init = true;

            var w0 = StringEditor;

            initFormType(BusinessEntityAddressForm, [
                'AddressId', w0,
                'AddressTypeId', w0
            ]);
        }
    }
}
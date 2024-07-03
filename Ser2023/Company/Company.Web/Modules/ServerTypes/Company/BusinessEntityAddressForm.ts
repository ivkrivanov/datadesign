import { AddressTypeDialog } from "@/Company/AddressType/AddressTypeDialog";
import { LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityAddressForm {
    AddressTypeId: LookupEditor;
    AddressTypeName: LookupEditor;
}

export class BusinessEntityAddressForm extends PrefixedContext {
    static formKey = 'Company.BusinessEntityAddress';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityAddressForm.init)  {
            BusinessEntityAddressForm.init = true;

            var w0 = LookupEditor;

            initFormType(BusinessEntityAddressForm, [
                'AddressTypeId', w0,
                'AddressTypeName', w0
            ]);
        }
    }
}

[AddressTypeDialog]; // referenced types
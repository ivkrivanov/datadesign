import { StringEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { AddressTypeDialog } from "@/Company/AddressType/AddressTypeDialog";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityAddressForm {
    BusinessEntityId: StringEditor;
    AddressId: StringEditor;
    AddressTypeId: LookupEditor;
}

export class BusinessEntityAddressForm extends PrefixedContext {
    static formKey = 'Company.BusinessEntityAddress';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityAddressForm.init)  {
            BusinessEntityAddressForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;

            initFormType(BusinessEntityAddressForm, [
                'BusinessEntityId', w0,
                'AddressId', w0,
                'AddressTypeId', w1
            ]);
        }
    }
}

[AddressTypeDialog]; // referenced types
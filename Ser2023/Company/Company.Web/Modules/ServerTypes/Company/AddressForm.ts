import { StringEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { StateProvinceDialog } from "@/Company/StateProvince/StateProvinceDialog";
import { initFormType } from "@serenity-is/corelib/q";

export interface AddressForm {
    AddressLine1: StringEditor;
    AddressLine2: StringEditor;
    CountryCode: LookupEditor;
    StateProvinceId: LookupEditor;
    City: LookupEditor;
    PostalCode: StringEditor;
}

export class AddressForm extends PrefixedContext {
    static formKey = 'Company.Address';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AddressForm.init)  {
            AddressForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;

            initFormType(AddressForm, [
                'AddressLine1', w0,
                'AddressLine2', w0,
                'CountryCode', w1,
                'StateProvinceId', w1,
                'City', w1,
                'PostalCode', w0
            ]);
        }
    }
}

[StateProvinceDialog]; // referenced types
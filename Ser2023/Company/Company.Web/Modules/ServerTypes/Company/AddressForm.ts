import { StringEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { StateProvinceDialog } from "@/Company/StateProvince/StateProvinceDialog";
import { initFormType } from "@serenity-is/corelib/q";

export interface AddressForm {
    AddressLine1: StringEditor;
    AddressLine2: StringEditor;
    Name: StringEditor;
    City: LookupEditor;
    StateProvinceId: LookupEditor;
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
                'Name', w0,
                'City', w1,
                'StateProvinceId', w1,
                'PostalCode', w0
            ]);
        }
    }
}

[StateProvinceDialog]; // referenced types
import { StringEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface AddressForm {
    AddressLine1: StringEditor;
    AddressLine2: StringEditor;
    City: StringEditor;
    CountryCode: ServiceLookupEditor;
    StateProvinceId: ServiceLookupEditor;
    PostalCode: StringEditor;
}

export class AddressForm extends PrefixedContext {
    static readonly formKey = 'Company.Address';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AddressForm.init)  {
            AddressForm.init = true;

            var w0 = StringEditor;
            var w1 = ServiceLookupEditor;

            initFormType(AddressForm, [
                'AddressLine1', w0,
                'AddressLine2', w0,
                'City', w0,
                'CountryCode', w1,
                'StateProvinceId', w1,
                'PostalCode', w0
            ]);
        }
    }
}
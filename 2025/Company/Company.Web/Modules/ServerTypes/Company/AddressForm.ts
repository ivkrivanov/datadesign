import { StringEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface AddressForm {
    AddressLine1: StringEditor;
    AddressLine2: StringEditor;
    City: StringEditor;
    CountryId: StringEditor;
    ProvinceId: IntegerEditor;
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

            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(AddressForm, [
                'AddressLine1', w0,
                'AddressLine2', w0,
                'City', w0,
                'CountryId', w0,
                'ProvinceId', w1,
                'PostalCode', w0,
                'IsActive', w1,
                'TenantId', w1
            ]);
        }
    }
}
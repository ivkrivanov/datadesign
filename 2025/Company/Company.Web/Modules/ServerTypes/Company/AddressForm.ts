import { StringEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { CountryDialog } from "../../Company/Country/CountryDialog";
import { ProvinceDialog } from "../../Company/Province/ProvinceDialog";

export interface AddressForm {
    AddressLine1: StringEditor;
    AddressLine2: StringEditor;
    City: StringEditor;
    CountryId: ServiceLookupEditor;
    ProvinceId: ServiceLookupEditor;
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
                'CountryId', w1,
                'ProvinceId', w1,
                'PostalCode', w0
            ]);
        }
    }
}

queueMicrotask(() => [CountryDialog, ProvinceDialog]); // referenced dialogs
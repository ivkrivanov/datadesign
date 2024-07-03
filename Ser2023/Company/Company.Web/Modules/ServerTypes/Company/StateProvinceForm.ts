import { StringEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { CountryDialog } from "@/Company/Country/CountryDialog";
import { initFormType } from "@serenity-is/corelib/q";

export interface StateProvinceForm {
    StateProvinceCode: StringEditor;
    StateProvinceName: StringEditor;
    CountryCode: LookupEditor;
}

export class StateProvinceForm extends PrefixedContext {
    static formKey = 'Company.StateProvince';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!StateProvinceForm.init)  {
            StateProvinceForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;

            initFormType(StateProvinceForm, [
                'StateProvinceCode', w0,
                'StateProvinceName', w0,
                'CountryCode', w1
            ]);
        }
    }
}

[CountryDialog]; // referenced types
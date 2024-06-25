import { StringEditor, LookupEditor, IntegerEditor, PrefixedContext } from "@serenity-is/corelib";
import { CountryDialog } from "@/Company/Country/CountryDialog";
import { initFormType } from "@serenity-is/corelib/q";

export interface StateProvinceForm {
    StateProvinceCode: StringEditor;
    CountryCode: LookupEditor;
    StateProvinceName: StringEditor;
    TerritoryId: IntegerEditor;
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
            var w2 = IntegerEditor;

            initFormType(StateProvinceForm, [
                'StateProvinceCode', w0,
                'CountryCode', w1,
                'StateProvinceName', w0,
                'TerritoryId', w2
            ]);
        }
    }
}

[CountryDialog]; // referenced types
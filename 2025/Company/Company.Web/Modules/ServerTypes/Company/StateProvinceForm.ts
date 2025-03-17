import { StringEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface StateProvinceForm {
    StateProvinceCode: StringEditor;
    CountryCode: ServiceLookupEditor;
    StateProvinceName: StringEditor;
}

export class StateProvinceForm extends PrefixedContext {
    static readonly formKey = 'Company.StateProvince';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!StateProvinceForm.init)  {
            StateProvinceForm.init = true;

            var w0 = StringEditor;
            var w1 = ServiceLookupEditor;

            initFormType(StateProvinceForm, [
                'StateProvinceCode', w0,
                'CountryCode', w1,
                'StateProvinceName', w0
            ]);
        }
    }
}
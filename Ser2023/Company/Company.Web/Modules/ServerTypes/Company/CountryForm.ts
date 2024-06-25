import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface CountryForm {
    CountryCode: StringEditor;
    CountryName: StringEditor;
}

export class CountryForm extends PrefixedContext {
    static formKey = 'Company.Country';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CountryForm.init)  {
            CountryForm.init = true;

            var w0 = StringEditor;

            initFormType(CountryForm, [
                'CountryCode', w0,
                'CountryName', w0
            ]);
        }
    }
}
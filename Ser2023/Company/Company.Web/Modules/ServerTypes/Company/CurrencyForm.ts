import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface CurrencyForm {
    CurrencyCode: StringEditor;
    Name: StringEditor;
}

export class CurrencyForm extends PrefixedContext {
    static formKey = 'Company.Currency';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CurrencyForm.init)  {
            CurrencyForm.init = true;

            var w0 = StringEditor;

            initFormType(CurrencyForm, [
                'CurrencyCode', w0,
                'Name', w0
            ]);
        }
    }
}
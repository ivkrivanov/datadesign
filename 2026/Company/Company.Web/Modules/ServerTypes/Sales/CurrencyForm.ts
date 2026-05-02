import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface CurrencyForm {
    CurrencyCode: StringEditor;
    Name: StringEditor;
}

export class CurrencyForm extends PrefixedContext {
    static readonly formKey = 'Sales.Currency';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CurrencyForm.init) {
            CurrencyForm.init = true;

            var w0 = StringEditor;

            initFormType(CurrencyForm, [
                'CurrencyCode', w0,
                'Name', w0
            ]);
        }
    }
}
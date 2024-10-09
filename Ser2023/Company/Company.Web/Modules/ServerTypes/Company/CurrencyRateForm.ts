import { DateEditor, StringEditor, DecimalEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface CurrencyRateForm {
    CurrencyRateDate: DateEditor;
    FromCurrencyCode: StringEditor;
    ToCurrencyCode: StringEditor;
    AverageRate: DecimalEditor;
    EndOfDayRate: DecimalEditor;
}

export class CurrencyRateForm extends PrefixedContext {
    static formKey = 'Company.CurrencyRate';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CurrencyRateForm.init)  {
            CurrencyRateForm.init = true;

            var w0 = DateEditor;
            var w1 = StringEditor;
            var w2 = DecimalEditor;

            initFormType(CurrencyRateForm, [
                'CurrencyRateDate', w0,
                'FromCurrencyCode', w1,
                'ToCurrencyCode', w1,
                'AverageRate', w2,
                'EndOfDayRate', w2
            ]);
        }
    }
}
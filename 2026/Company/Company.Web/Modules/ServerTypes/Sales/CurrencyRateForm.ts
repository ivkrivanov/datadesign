import { DateEditor, DecimalEditor, initFormType, LookupEditor, PrefixedContext } from "@serenity-is/corelib";

export interface CurrencyRateForm {
    CurrencyRateDate: DateEditor;
    FromCurrencyCode: LookupEditor;
    ToCurrencyCode: LookupEditor;
    AverageRate: DecimalEditor;
    EndOfDayRate: DecimalEditor;
}

export class CurrencyRateForm extends PrefixedContext {
    static readonly formKey = 'Sales.CurrencyRate';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CurrencyRateForm.init) {
            CurrencyRateForm.init = true;

            var w0 = DateEditor;
            var w1 = LookupEditor;
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
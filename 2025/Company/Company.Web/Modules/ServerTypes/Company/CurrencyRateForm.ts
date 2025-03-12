import { PrefixedContext, IntegerEditor, DateEditor, StringEditor, DecimalEditor, initFormType } from '@serenity-is/corelib';

export interface CurrencyRateForm {
    CurrencyRateDate: DateEditor;
    FromCurrencyCode: StringEditor;
    ToCurrencyCode: StringEditor;
    AverageRate: DecimalEditor;
    EndOfDayRate: DecimalEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class CurrencyRateForm extends PrefixedContext {
    static readonly formKey = 'Company.CurrencyRate';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!CurrencyRateForm.init)  {
            CurrencyRateForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = DateEditor;
            var w2 = StringEditor;
            var w3 = DecimalEditor;

            initFormType(CurrencyRateForm, [
            'CurrencyRateDate', w1,
            'FromCurrencyCode', w2,
            'ToCurrencyCode', w2,
            'AverageRate', w3,
            'EndOfDayRate', w3,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
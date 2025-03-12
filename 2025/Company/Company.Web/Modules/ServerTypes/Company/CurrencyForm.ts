import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface CurrencyForm {
    CurrencyCode: StringEditor;
    Name: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class CurrencyForm extends PrefixedContext {
    static readonly formKey = 'Company.Currency';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!CurrencyForm.init)  {
            CurrencyForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(CurrencyForm, [
            'CurrencyCode', w1,
            'Name', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
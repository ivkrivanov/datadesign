import { PrefixedContext, StringEditor, IntegerEditor, initFormType } from '@serenity-is/corelib';

export interface CurrencyForm {
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
            
            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(CurrencyForm, [
            'Name', w0,
            'IsActive', w1,
            'TenantId', w1,
            ]);
        }
    }
}
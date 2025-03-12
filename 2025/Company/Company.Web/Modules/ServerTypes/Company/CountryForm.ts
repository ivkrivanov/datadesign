import { PrefixedContext, StringEditor, IntegerEditor, initFormType } from '@serenity-is/corelib';

export interface CountryForm {
    CountryName: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class CountryForm extends PrefixedContext {
    static readonly formKey = 'Company.Country';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!CountryForm.init)  {
            CountryForm.init = true;
            
            var w0 = StringEditor;
            var w1 = IntegerEditor;

            initFormType(CountryForm, [
            'CountryName', w0,
            'IsActive', w1,
            'TenantId', w1,
            ]);
        }
    }
}
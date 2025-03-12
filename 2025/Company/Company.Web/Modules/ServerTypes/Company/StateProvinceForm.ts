import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface StateProvinceForm {
    StateProvinceCode: StringEditor;
    CountryCode: StringEditor;
    StateProvinceName: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class StateProvinceForm extends PrefixedContext {
    static readonly formKey = 'Company.StateProvince';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!StateProvinceForm.init)  {
            StateProvinceForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(StateProvinceForm, [
            'StateProvinceCode', w1,
            'CountryCode', w1,
            'StateProvinceName', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
import { PrefixedContext, IntegerEditor, initFormType } from '@serenity-is/corelib';

export interface BusinessEntityForm {
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class BusinessEntityForm extends PrefixedContext {
    static readonly formKey = 'Company.BusinessEntity';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!BusinessEntityForm.init)  {
            BusinessEntityForm.init = true;
            
            var w0 = IntegerEditor;

            initFormType(BusinessEntityForm, [
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
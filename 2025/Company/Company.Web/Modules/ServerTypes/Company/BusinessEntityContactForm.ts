import { PrefixedContext, IntegerEditor, initFormType } from '@serenity-is/corelib';

export interface BusinessEntityContactForm {
    PersonId: IntegerEditor;
    ContactTypeId: IntegerEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class BusinessEntityContactForm extends PrefixedContext {
    static readonly formKey = 'Company.BusinessEntityContact';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!BusinessEntityContactForm.init)  {
            BusinessEntityContactForm.init = true;
            
            var w0 = IntegerEditor;

            initFormType(BusinessEntityContactForm, [
            'PersonId', w0,
            'ContactTypeId', w0,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
import { PrefixedContext, IntegerEditor, initFormType, StringEditor } from '@serenity-is/corelib';

export interface BusinessEntityForm {
    PersonType: StringEditor;
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    Suffix: StringEditor;
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
                'PersonType', w0,
                'Title', w0,
                'FirstName', w0,
                'MiddleName', w0,
                'LastName', w0,
                'Suffix', w0,
                'IsActive', w0,
                'TenantId', w0,
            ]);
        }
    }
}
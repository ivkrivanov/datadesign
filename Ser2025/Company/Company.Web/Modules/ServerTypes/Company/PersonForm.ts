import { PrefixedContext, IntegerEditor, StringEditor, initFormType } from '@serenity-is/corelib';

export interface PersonForm {
    PersonType: StringEditor;
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    Suffix: StringEditor;
    IsActive: IntegerEditor;
    TenantId: IntegerEditor;
}

export class PersonForm extends PrefixedContext {
    static readonly formKey = 'Company.Person';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!PersonForm.init)  {
            PersonForm.init = true;
            
            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(PersonForm, [
            'PersonType', w1,
            'Title', w1,
            'FirstName', w1,
            'MiddleName', w1,
            'LastName', w1,
            'Suffix', w1,
            'IsActive', w0,
            'TenantId', w0,
            ]);
        }
    }
}
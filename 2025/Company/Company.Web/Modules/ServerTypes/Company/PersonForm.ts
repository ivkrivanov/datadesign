import { IntegerEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface PersonForm {
    BusinessEntityId: IntegerEditor;
    PersonType: StringEditor;
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    Suffix: StringEditor;
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
                'BusinessEntityId', w0,
                'PersonType', w1,
                'Title', w1,
                'FirstName', w1,
                'MiddleName', w1,
                'LastName', w1,
                'Suffix', w1
            ]);
        }
    }
}
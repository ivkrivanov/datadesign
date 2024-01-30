import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonForm {
    PersonType: StringEditor;
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    Suffix: StringEditor;
}

export class PersonForm extends PrefixedContext {
    static formKey = 'Person.Person';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonForm.init)  {
            PersonForm.init = true;

            var w0 = StringEditor;

            initFormType(PersonForm, [
                'PersonType', w0,
                'Title', w0,
                'FirstName', w0,
                'MiddleName', w0,
                'LastName', w0,
                'Suffix', w0
            ]);
        }
    }
}
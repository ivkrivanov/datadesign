import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityForm {
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    FullName: StringEditor;
    Suffix: StringEditor;
}

export class BusinessEntityForm extends PrefixedContext {
    static formKey = 'Company.BusinessEntity';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityForm.init)  {
            BusinessEntityForm.init = true;

            var w0 = StringEditor;

            initFormType(BusinessEntityForm, [
                'Title', w0,
                'FirstName', w0,
                'MiddleName', w0,
                'LastName', w0,
                'FullName', w0,
                'Suffix', w0
            ]);
        }
    }
}
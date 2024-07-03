import { StringEditor, LookupEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityForm {
    PersonType: StringEditor;
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    Suffix: StringEditor;
    Name: LookupEditor;
    BusinessEntityAddresses: StringEditor;
}

export class BusinessEntityForm extends PrefixedContext {
    static formKey = 'Company.BusinessEntity';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityForm.init)  {
            BusinessEntityForm.init = true;

            var w0 = StringEditor;
            var w1 = LookupEditor;

            initFormType(BusinessEntityForm, [
                'PersonType', w0,
                'Title', w0,
                'FirstName', w0,
                'MiddleName', w0,
                'LastName', w0,
                'Suffix', w0,
                'Name', w1,
                'BusinessEntityAddresses', w0
            ]);
        }
    }
}
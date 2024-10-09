import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityForm {
<<<<<<< HEAD
=======
    PersonType: StringEditor;
>>>>>>> revert
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
<<<<<<< HEAD
    FullName: StringEditor;
    Suffix: StringEditor;
=======
    Suffix: StringEditor;
    AddressType: StringEditor;
>>>>>>> revert
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
<<<<<<< HEAD
=======
                'PersonType', w0,
>>>>>>> revert
                'Title', w0,
                'FirstName', w0,
                'MiddleName', w0,
                'LastName', w0,
<<<<<<< HEAD
                'FullName', w0,
                'Suffix', w0
=======
                'Suffix', w0,
                'AddressType', w0
>>>>>>> revert
            ]);
        }
    }
}
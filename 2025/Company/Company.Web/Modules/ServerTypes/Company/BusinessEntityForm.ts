import { StringEditor, BooleanEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BusinessEntityForm {
    PersonType: StringEditor;
    Title: StringEditor;
    Suffix: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    AddressList: StringEditor;
    IsActive: BooleanEditor;
}

export class BusinessEntityForm extends PrefixedContext {
    static readonly formKey = 'Company.BusinessEntity';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityForm.init)  {
            BusinessEntityForm.init = true;

            var w0 = StringEditor;
            var w1 = BooleanEditor;

            initFormType(BusinessEntityForm, [
                'PersonType', w0,
                'Title', w0,
                'Suffix', w0,
                'FirstName', w0,
                'MiddleName', w0,
                'LastName', w0,
                'AddressList', w0,
                'IsActive', w1
            ]);
        }
    }
}
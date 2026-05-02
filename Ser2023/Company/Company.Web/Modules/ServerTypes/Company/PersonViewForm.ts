import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PersonViewForm {
    PersonType: StringEditor;
    Title: StringEditor;
    FirstName: StringEditor;
    MiddleName: StringEditor;
    LastName: StringEditor;
    Suffix: StringEditor;
    Name: StringEditor;
    PhoneNumberType: StringEditor;
    AddressType: StringEditor;
    AddressLine1: StringEditor;
    AddressLine2: StringEditor;
    City: StringEditor;
    PostalCode: StringEditor;
    StateProvinceCode: StringEditor;
    Country: StringEditor;
}

export class PersonViewForm extends PrefixedContext {
    static formKey = 'Company.PersonView';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PersonViewForm.init)  {
            PersonViewForm.init = true;

            var w0 = StringEditor;

            initFormType(PersonViewForm, [
                'PersonType', w0,
                'Title', w0,
                'FirstName', w0,
                'MiddleName', w0,
                'LastName', w0,
                'Suffix', w0,
                'Name', w0,
                'PhoneNumberType', w0,
                'AddressType', w0,
                'AddressLine1', w0,
                'AddressLine2', w0,
                'City', w0,
                'PostalCode', w0,
                'StateProvinceCode', w0,
                'Country', w0
            ]);
        }
    }
}
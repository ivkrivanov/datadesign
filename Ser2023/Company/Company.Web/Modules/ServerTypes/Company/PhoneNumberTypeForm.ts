import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface PhoneNumberTypeForm {
    Name: StringEditor;
}

export class PhoneNumberTypeForm extends PrefixedContext {
    static formKey = 'Company.PhoneNumberType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!PhoneNumberTypeForm.init)  {
            PhoneNumberTypeForm.init = true;

            var w0 = StringEditor;

            initFormType(PhoneNumberTypeForm, [
                'Name', w0
            ]);
        }
    }
}
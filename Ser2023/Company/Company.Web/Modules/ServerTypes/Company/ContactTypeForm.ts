import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface ContactTypeForm {
    Name: StringEditor;
}

export class ContactTypeForm extends PrefixedContext {
    static formKey = 'Company.ContactType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ContactTypeForm.init)  {
            ContactTypeForm.init = true;

            var w0 = StringEditor;

            initFormType(ContactTypeForm, [
                'Name', w0
            ]);
        }
    }
}
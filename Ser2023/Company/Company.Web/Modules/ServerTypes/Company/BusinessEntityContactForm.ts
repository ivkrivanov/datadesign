import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityContactForm {
    PersonId: StringEditor;
    ContactTypeId: StringEditor;
}

export class BusinessEntityContactForm extends PrefixedContext {
    static formKey = 'Company.BusinessEntityContact';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityContactForm.init)  {
            BusinessEntityContactForm.init = true;

            var w0 = StringEditor;

            initFormType(BusinessEntityContactForm, [
                'PersonId', w0,
                'ContactTypeId', w0
            ]);
        }
    }
}
import { LookupEditor, ServiceLookupEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BusinessEntityContactForm {
    PersonId: LookupEditor;
    ContactTypeId: ServiceLookupEditor;
}

export class BusinessEntityContactForm extends PrefixedContext {
    static readonly formKey = 'Company.BusinessEntityContact';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessEntityContactForm.init)  {
            BusinessEntityContactForm.init = true;

            var w0 = LookupEditor;
            var w1 = ServiceLookupEditor;

            initFormType(BusinessEntityContactForm, [
                'PersonId', w0,
                'ContactTypeId', w1
            ]);
        }
    }
}
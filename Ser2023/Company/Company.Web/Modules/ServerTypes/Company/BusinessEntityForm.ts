import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface BusinessEntityForm {
    Rowguid: StringEditor;
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
                'Rowguid', w0
            ]);
        }
    }
}
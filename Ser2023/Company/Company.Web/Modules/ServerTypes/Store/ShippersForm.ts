import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface ShippersForm {
    CompanyName: StringEditor;
    Phone: StringEditor;
}

export class ShippersForm extends PrefixedContext {
    static formKey = 'Store.Shippers';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ShippersForm.init)  {
            ShippersForm.init = true;

            var w0 = StringEditor;

            initFormType(ShippersForm, [
                'CompanyName', w0,
                'Phone', w0
            ]);
        }
    }
}
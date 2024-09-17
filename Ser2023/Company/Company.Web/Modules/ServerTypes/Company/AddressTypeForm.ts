import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface AddressTypeForm {
    Name: StringEditor;
    Rowguid: StringEditor;
}

export class AddressTypeForm extends PrefixedContext {
    static formKey = 'Company.AddressType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!AddressTypeForm.init)  {
            AddressTypeForm.init = true;

            var w0 = StringEditor;

            initFormType(AddressTypeForm, [
                'Name', w0,
                'Rowguid', w0
            ]);
        }
    }
}
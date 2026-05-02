import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface ShopsForm {
    ShopId: StringEditor;
    ShopName: StringEditor;
    ContactName: StringEditor;
    ContactTitle: StringEditor;
    Address: StringEditor;
    City: StringEditor;
    Region: StringEditor;
    PostalCode: StringEditor;
    Country: StringEditor;
    Phone: StringEditor;
}

export class ShopsForm extends PrefixedContext {
    static formKey = 'Store.Shops';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ShopsForm.init)  {
            ShopsForm.init = true;

            var w0 = StringEditor;

            initFormType(ShopsForm, [
                'ShopId', w0,
                'ShopName', w0,
                'ContactName', w0,
                'ContactTitle', w0,
                'Address', w0,
                'City', w0,
                'Region', w0,
                'PostalCode', w0,
                'Country', w0,
                'Phone', w0
            ]);
        }
    }
}

namespace Store.Store {
    export interface ShopsForm {
        ShopID: Serenity.StringEditor;
        ShopName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
    }

    export class ShopsForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Shops';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ShopsForm.init)  {
                ShopsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ShopsForm, [
                    'ShopID', w0,
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
}


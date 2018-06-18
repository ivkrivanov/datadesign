namespace Serene1.Default.Infra {
    export interface AddressesForm {
        Address: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Country: Serenity.StringEditor;
    }

    export class AddressesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Infra.Addresses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddressesForm.init)  {
                AddressesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AddressesForm, [
                    'Address', w0,
                    'ZipCode', w0,
                    'City', w0,
                    'State', w0,
                    'Country', w0
                ]);
            }
        }
    }
}


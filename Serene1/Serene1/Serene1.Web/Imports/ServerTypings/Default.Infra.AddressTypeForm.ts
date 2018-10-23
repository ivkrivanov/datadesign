namespace Serene1.Default.Infra {
    export interface AddressTypeForm {
        EnumName: Serenity.StringEditor;
    }

    export class AddressTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Infra.AddressType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddressTypeForm.init)  {
                AddressTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AddressTypeForm, [
                    'EnumName', w0
                ]);
            }
        }
    }
}


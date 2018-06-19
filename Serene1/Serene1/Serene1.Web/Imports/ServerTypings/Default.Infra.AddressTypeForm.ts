namespace Serene1.Default.Infra {
    export interface AddressTypeForm {
        EnumValue: Serenity.IntegerEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(AddressTypeForm, [
                    'EnumValue', w0,
                    'EnumName', w1
                ]);
            }
        }
    }
}


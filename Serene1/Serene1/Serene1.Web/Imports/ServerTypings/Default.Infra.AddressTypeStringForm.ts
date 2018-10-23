namespace Serene1.Default.Infra {
    export interface AddressTypeStringForm {
        EnumValue: Serenity.LookupEditor;
        DisplayName: Serenity.StringEditor;
        LanguageId: Serenity.IntegerEditor;
    }

    export class AddressTypeStringForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Infra.AddressTypeString';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddressTypeStringForm.init)  {
                AddressTypeStringForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(AddressTypeStringForm, [
                    'EnumValue', w0,
                    'DisplayName', w1,
                    'LanguageId', w2
                ]);
            }
        }
    }
}


namespace Serene1.Default.Infra {
    export interface AddressTypeStringForm {
        EnumValue: Serenity.IntegerEditor;
        DisplayName: Serenity.StringEditor;
        Language: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class AddressTypeStringForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Infra.AddressTypeString';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddressTypeStringForm.init)  {
                AddressTypeStringForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(AddressTypeStringForm, [
                    'EnumValue', w0,
                    'DisplayName', w1,
                    'Language', w0,
                    'TenantId', w0,
                    'IsActive', w0
                ]);
            }
        }
    }
}


namespace Serene1.Default.Infra {
    export interface AddressTypeForm {
        EnumName: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
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
                var w1 = s.IntegerEditor;

                Q.initFormType(AddressTypeForm, [
                    'EnumName', w0,
                    'TenantId', w1,
                    'IsActive', w1
                ]);
            }
        }
    }
}


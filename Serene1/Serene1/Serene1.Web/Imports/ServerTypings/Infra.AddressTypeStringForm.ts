
namespace Serene1.Infra {
    export class AddressTypeStringForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.AddressTypeString';
    }

    export interface AddressTypeStringForm {
        EnumValue: Serenity.IntegerEditor;
        DisplayName: Serenity.StringEditor;
        Language: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [,
        ['EnumValue', () => Serenity.IntegerEditor],
        ['DisplayName', () => Serenity.StringEditor],
        ['Language', () => Serenity.IntegerEditor],
        ['TenantId', () => Serenity.IntegerEditor],
        ['IsActive', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AddressTypeStringForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
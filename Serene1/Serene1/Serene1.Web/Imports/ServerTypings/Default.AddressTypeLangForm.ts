
namespace Serene1.Default.Infra.Default {
    export class AddressTypeLangForm extends Serenity.PrefixedContext {
        static formKey = 'Default.AddressTypeLang';
    }

    export interface AddressTypeLangForm {
        EnumValue: Serenity.IntegerEditor;
        LanguageId: Serenity.IntegerEditor;
        EnumName: Serenity.StringEditor;
    }

    [,
        ['EnumValue', () => Serenity.IntegerEditor],
        ['LanguageId', () => Serenity.IntegerEditor],
        ['EnumName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AddressTypeLangForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}
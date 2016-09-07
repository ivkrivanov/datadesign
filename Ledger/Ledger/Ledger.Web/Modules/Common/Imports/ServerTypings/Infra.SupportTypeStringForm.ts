namespace Ledger.Infra {
    export class SupportTypeStringForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.SupportTypeString';

    }

    export interface SupportTypeStringForm {
        EnumValue: Serenity.IntegerEditor;
        DisplayName: Serenity.StringEditor;
        Locale: Serenity.IntegerEditor;
    }

    [['EnumValue', () => Serenity.IntegerEditor], ['DisplayName', () => Serenity.StringEditor], ['Locale', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SupportTypeStringForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


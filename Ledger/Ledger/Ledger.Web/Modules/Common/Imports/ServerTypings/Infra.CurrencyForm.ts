namespace Ledger.Infra {
    export class CurrencyForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.Currency';

    }

    export interface CurrencyForm {
        Code: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['Code', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(CurrencyForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


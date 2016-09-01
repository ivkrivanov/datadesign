namespace Ledger.Infra {
    export class PhoneForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.Phone';

    }

    export interface PhoneForm {
        PhoneNumber: Serenity.StringEditor;
    }

    [['PhoneNumber', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PhoneForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


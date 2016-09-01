namespace Ledger.Infra {
    export class EmailForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.Email';

    }

    export interface EmailForm {
        EmailAddress: Serenity.StringEditor;
    }

    [['EmailAddress', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EmailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


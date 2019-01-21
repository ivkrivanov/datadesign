namespace Ledger.HR {
    export class EmplAddressTypeForm extends Serenity.PrefixedContext {
        static formKey = 'HR.EmplAddressType';

    }

    export interface EmplAddressTypeForm {
        EmplAddressType: Serenity.StringEditor;
    }

    [['EmplAddressType', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EmplAddressTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


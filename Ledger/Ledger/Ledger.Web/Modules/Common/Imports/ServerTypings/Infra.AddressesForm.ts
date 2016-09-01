namespace Ledger.Infra {
    export class AddressesForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.Addresses';

    }

    export interface AddressesForm {
        Address: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Country: Serenity.StringEditor;
    }

    [['Address', () => Serenity.StringEditor], ['ZipCode', () => Serenity.StringEditor], ['City', () => Serenity.StringEditor], ['State', () => Serenity.StringEditor], ['Country', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AddressesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


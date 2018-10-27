namespace Ledger.HR {
    export class EmployeeAddressForm extends Serenity.PrefixedContext {
        static formKey = 'HR.EmployeeAddress';

    }

    export interface EmployeeAddressForm {
        AddressId: Serenity.LookupEditor;
        AddressTypeId: Serenity.EnumEditor;
    }

    [['AddressId', () => Serenity.LookupEditor], ['AddressTypeId', () => Serenity.EnumEditor]].forEach(x => Object.defineProperty(EmployeeAddressForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


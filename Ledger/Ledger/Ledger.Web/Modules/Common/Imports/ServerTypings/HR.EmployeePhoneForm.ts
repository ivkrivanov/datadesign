namespace Ledger.HR {
    export class EmployeePhoneForm extends Serenity.PrefixedContext {
        static formKey = 'HR.EmployeePhone';

    }

    export interface EmployeePhoneForm {
        EmployeeId: Serenity.IntegerEditor;
        PhoneId: Serenity.LookupEditor;
        PhoneType: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['EmployeeId', () => Serenity.IntegerEditor], ['PhoneId', () => Serenity.LookupEditor], ['PhoneType', () => Serenity.StringEditor], ['TenantId', () => Serenity.IntegerEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(EmployeePhoneForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


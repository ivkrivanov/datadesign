namespace Ledger.HR {
    export class EmployeeEmailForm extends Serenity.PrefixedContext {
        static formKey = 'HR.EmployeeEmail';

    }

    export interface EmployeeEmailForm {
        EmployeeId: Serenity.LookupEditor;
        EmailId: Serenity.LookupEditor;
        EmailType: Serenity.StringEditor;
    }

    [['EmployeeId', () => Serenity.LookupEditor], ['EmailId', () => Serenity.LookupEditor], ['EmailType', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(EmployeeEmailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


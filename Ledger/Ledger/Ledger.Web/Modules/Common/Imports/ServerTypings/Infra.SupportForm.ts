

namespace Ledger.Infra {
    export class SupportForm extends Serenity.PrefixedContext {
        static formKey = 'Infra.Support';
    }

    export interface SupportForm {
        Guid: Serenity.StringEditor;
        SupportTypeId: Serenity.IntegerEditor;
        SupportCode: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['SupportId', () => Serenity.IntegerEditor], ['Guid', () => Serenity.StringEditor], ['SupportTypeId', () => Serenity.IntegerEditor], ['SupportCode', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor], ['TenantId', () => Serenity.IntegerEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SupportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}


namespace Ledger.Default {
    export class EmplAddressTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EmplAddressType';
    }

    export interface EmplAddressTypeForm {
        EmplAddressType: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['EmplAddressType', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['TenantId', () => Serenity.IntegerEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(EmplAddressTypeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}
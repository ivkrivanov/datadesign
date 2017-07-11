

namespace Store.Store {
    export class SupportTypeStringForm extends Serenity.PrefixedContext {
        static formKey = 'Store.SupportTypeString';
    }

    export interface SupportTypeStringForm {
        EnumValue: Serenity.IntegerEditor;
        DisplayName: Serenity.StringEditor;
        LanguageId: Serenity.IntegerEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        TenantId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    [['EnumValue', () => Serenity.IntegerEditor], ['DisplayName', () => Serenity.StringEditor], ['LanguageId', () => Serenity.IntegerEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor], ['UpdateUserId', () => Serenity.IntegerEditor], ['UpdateDate', () => Serenity.DateEditor], ['TenantId', () => Serenity.IntegerEditor], ['IsActive', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SupportTypeStringForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}